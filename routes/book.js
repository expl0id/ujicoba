const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');

const auth = require('../configs/auth');

router.get('/', auth.verifyToken, bookController.seeAllBook);
router.get('/cekId/:id', auth.verifyToken,bookController.seeBookById);
router.post('/add', auth.verifyToken, bookController.createBook);
router.put('/update/:id', auth.verifyToken,bookController.updateBook);
router.delete('/delete/:id', auth.verifyToken,bookController.deleteBook);
router.get('/cekName/', auth.verifyToken,bookController.seeBookByName);

module.exports = router;