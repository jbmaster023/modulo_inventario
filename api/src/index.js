require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const { sequelize } = require('./models');
require('./config/passport')(passport);

const productosRoutes = require('../routes/productos');

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/api/productos', productosRoutes);

const PORT = process.env.PORT || 4000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`API listening on ${PORT}`));
});
