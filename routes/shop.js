const express = require('express')

const productsController = require('../controllers/products')

const adminData = require('./admin')

const path = require('path')

const router = express.Router()


router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    activeShop: true,
    productCSS: true
  });
});
;

  module.exports = router;