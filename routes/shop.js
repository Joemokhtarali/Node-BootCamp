const express = require('express')

const adminData = require('./admin')

const path = require('path')

const router = express.Router()


router.get("/", (req, res, next) => {
  const products = adminData.products
  res.render('shop', {prods: products, title: 'Shop'})
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    // res.send("<h1>Main Page</h1>"); // we could send HTML tags, files, or functions
  });

  module.exports = router;