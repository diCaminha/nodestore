const ProductModel = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    let product = new ProductModel(req.body.title);
    product.save();
    res.redirect('/products');
}

exports.getProducts = (req, res, next) => {
    let products = ProductModel.fetchAll(); 
    res.render('shop/products-list', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}
