module.exports = (sequelize, DataTypes) => {
  const ProductoImagen = sequelize.define('ProductoImagen', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productoId: { type: DataTypes.INTEGER, allowNull: false },
    ruta: { type: DataTypes.STRING, allowNull: false },
  }, {
    tableName: 'producto_imagenes',
    timestamps: false,
  });

  ProductoImagen.associate = models => {
    ProductoImagen.belongsTo(models.Producto, { foreignKey: 'productoId', as: 'producto' });
  };

  return ProductoImagen;
};
