const express = require('express');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const productoController = require('../controllers/productoController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename: (req, file, cb) => cb(null, `prod_${Date.now()}${path.extname(file.originalname)}`)
});

const upload = multer({ storage, limits: { files: 5, fileSize: 2 * 1024 * 1024 } });

router.use(passport.authenticate('jwt', { session: false }));

router.get('/', productoController.listar);
router.get('/:id', productoController.obtener);
router.post('/', upload.array('imagenes', 5), productoController.crear);
router.put('/:id', upload.array('imagenes', 5), productoController.actualizar);
router.delete('/:id', productoController.eliminar);

module.exports = router;
