const http = require('http');
const express = require('express');

const app = express();

app.use('/product',(req, res, next) => {
    res.send("<h1>Hello from /product </h1>")
});

app.use('/',(req, res, next) => {
    res.send("<h1>Hello from / </h1>")
});

app.listen(3000);