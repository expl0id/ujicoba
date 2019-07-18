const express = require('express');

const router = express.Router();

const ordersController = require('../controllers/orders');

const auth = require('../configs/auth');

router.post('/add',auth.verifyToken, ordersController.createOrders);

module.exports = router;