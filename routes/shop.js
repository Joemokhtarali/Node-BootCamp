const express = require('express')

const productsController = require('../controllers/products')

const adminData = require('./admin')

const path = require('path')

const router = express.Router()


router.get("/", productsController.getProduct);

  module.exports = router;