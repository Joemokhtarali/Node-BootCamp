const products = []
const adminData = require('../routes/admin')
const path = require('path')

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    // res.send('<h1> Add Product</h1>'); // we could send HTML tags, files, or functions
    // res.send(
    //   '<form action="/product" method="POST"><input type="text" name="title"><button type="submit" >Add Product</button></input></form>'
    // );
    // next() // Allows the request to continue to the next middleware in Line
    // don't call next to other routes
  }

  exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect("/");
  }

  exports.getProduct = (req, res, next) => {
    const products = adminData.products
    res.render('shop', {prods: `products`, title: 'Shop'})
      // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
      // res.send("<h1>Main Page</h1>"); // we could send HTML tags, files, or functions
    }