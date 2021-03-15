const express = require('express')
const router = express.Router()
const path = require('path')
const productsController = require('../controllers/products')


router.get("/add-product",  (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  });
  
router.post("/add-product", productsController.postAddProduct);

exports.routes = router
