const express = require('express')

const path = require('path')

const router = express.Router()


router.get("/shop", (req, res, next) => {
  res.render('shop')
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    // res.send("<h1>Main Page</h1>"); // we could send HTML tags, files, or functions
  });

  module.exports = router;