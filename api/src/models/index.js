const { Sequelize, DataTypes } = require('sequelize');
const ProductoModel = require('../../models/Producto');
const ImagenModel = require('../../models/ProductoImagen');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const models = {};
models.Producto = ProductoModel(sequelize, DataTypes);
models.ProductoImagen = ImagenModel(sequelize, DataTypes);

Object.values(models).forEach(model => {
  if (model.associate) model.associate(models);
});

module.exports = { sequelize, ...models };
