const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const cartRoutes = require('./routes/cart');
const errorController = require('./controllers/error');

const app = express();


//configuring express instance
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//refering routes
app.use('/admin', adminRoutes);
app.use('/cart', cartRoutes);
app.use(shopRoutes);

app.use(errorController.errorPage);

app.listen(3000);
