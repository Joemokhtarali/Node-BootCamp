const path = require('path')
const express = require('express')
const router = express.Router()
const products = []
// const productsController = require('../controllers/products')


router.get("/add-product",  (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  });
  
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
})

exports.routes = router;
exports.products = products;
