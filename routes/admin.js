const express = require('express')
const router = express.Router()
const path = require('path')

const products = []


router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    // res.send('<h1> Add Product</h1>'); // we could send HTML tags, files, or functions
    // res.send(
    //   '<form action="/product" method="POST"><input type="text" name="title"><button type="submit" >Add Product</button></input></form>'
    // );
    // next() // Allows the request to continue to the next middleware in Line
    // don't call next to other routes
  });
  
  router.post("/add-product", (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect("/");
  });
  


exports.routes = router
exports.products = products