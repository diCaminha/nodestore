const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorController = require('./controllers/error');

//configuring express instance
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//configuring routes and data
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//refering routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.errorPage);

app.listen(3000);
