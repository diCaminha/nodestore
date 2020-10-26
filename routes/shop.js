const path = require('path');
const rootPath = require('../utils/paths');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views','shop.html'));
});

module.exports = router;