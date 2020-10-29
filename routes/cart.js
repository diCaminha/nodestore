const path = require('path');
const express = require('express');

const cartController = require('../controllers/cart');

const router = express.Router();

router.get('/', cartController.getCartPage);

module.exports = router;