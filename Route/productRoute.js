const express = require('express');
const productController = require('../controller/productController');
const auth = require('../middleware/authController')
const multer = require('multer')
const utils = require('../utils/utils')
const uploads = multer({storage: utils.fileStorageEngine})


const Router = express.Router();
Router.use(express.urlencoded({extended: true}))
Router.use(express.json())


Router.get('/my-products/', auth, productController.getProducts)

Router.get('/product/:id', auth, productController.getProduct)

Router.post('/', auth, uploads.single('image'), productController.addProduct) // New product

// TODO: Modify request data gotten from the below handler to be multer format instead of req.body
Router.put('/product/update/:id', auth, productController.updateProduct)

Router.delete('/product/delete/:id', auth, productController.deleteProduct)


module.exports = Router;