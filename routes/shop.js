const path = require('path');
const rootPath = require('../utils/paths');
const express = require('express');

const router = express.Router();

const adminData = require('../routes/admin');

router.get('/', (req, res, next) => {
    //logar dados de products
    console.log(adminData.products);
    res.sendFile(path.join(rootPath, 'views','shop.html'));
});

module.exports = router;