const { Producto, ProductoImagen } = require('../src/models');
const fs = require('fs');
const path = require('path');

exports.crear = async (req, res) => {
  try {
    const { nombre, descripcion, precio, sucursal, stock } = req.body;
    const producto = await Producto.create({ nombre, descripcion, precio, sucursal, stock });
    const rutas = req.files.map(f => `/uploads/${f.filename}`);
    await Promise.all(rutas.map(ruta => ProductoImagen.create({ productoId: producto.id, ruta })));
    const creado = await Producto.findByPk(producto.id, { include: 'imagenes' });
    res.status(201).json(creado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listar = async (_, res) => {
  const productos = await Producto.findAll({ include: 'imagenes' });
  res.json(productos);
};

exports.obtener = async (req, res) => {
  const producto = await Producto.findByPk(req.params.id, { include: 'imagenes' });
  if (!producto) return res.status(404).json({ error: 'No encontrado' });
  res.json(producto);
};

exports.actualizar = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: 'No encontrado' });
    const { nombre, descripcion, precio, sucursal, stock } = req.body;
    await producto.update({ nombre, descripcion, precio, sucursal, stock });
    if (req.files.length) {
      const viejas = await ProductoImagen.findAll({ where: { productoId: producto.id } });
      viejas.forEach(img => {
        fs.unlinkSync(path.join(__dirname, '../uploads', path.basename(img.ruta)));
        img.destroy();
      });
      const nuevas = req.files.map(f => `/uploads/${f.filename}`);
      await Promise.all(nuevas.map(ruta => ProductoImagen.create({ productoId: producto.id, ruta })));
    }
    const actualizado = await Producto.findByPk(producto.id, { include: 'imagenes' });
    res.json(actualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.eliminar = async (req, res) => {
  const producto = await Producto.findByPk(req.params.id);
  if (!producto) return res.status(404).json({ error: 'No encontrado' });
  await producto.destroy();
  res.status(204).send();
};
