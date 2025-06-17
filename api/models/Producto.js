module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    precio: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    sucursal: { type: DataTypes.STRING },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  }, {
    tableName: 'productos',
    timestamps: false,
  });

  Producto.associate = models => {
    Producto.hasMany(models.ProductoImagen, { foreignKey: 'productoId', as: 'imagenes', onDelete: 'CASCADE' });
  };

  return Producto;
};
