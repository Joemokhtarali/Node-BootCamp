const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    // res.send('<h1> Add Product</h1>'); // we could send HTML tags, files, or functions
    // res.send(
    //   '<form action="/product" method="POST"><input type="text" name="title"><button type="submit" >Add Product</button></input></form>'
    // );
    // next() // Allows the request to continue to the next middleware in Line
    // don't call next to other routes
  });
  
  router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });
  


module.exports = router;