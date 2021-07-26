const Product = require('../model/productModel');
const utils = require('../utils/utils')

// This returns all products for the current user
exports.getProducts = async (req, res) => {
    let user = req.user
    const products = await Product.getProducts(user._id)
    res.json(products)
}
// This returns a particular product for a particular user
exports.getProduct = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.getProduct(productId)
     if (product) {
        res.status(200).json({
            status: 'Success!', product})
    }
    else {utils.sendNotFoundError(res,'Product')}
}
// This adds products
exports.addProduct = async (req,res) => {
    let product = req.body
    let user = req.user;
    product.userid = user._id;
    let response = await Product.add(product)
    res.status(201).json(`Product added successfully with id: ${response._id}`)
    
}
exports.updateProduct = async (req, res) => {
    let productId = req.params.id;
    const update = req.body;
    const response = await Product.updateProduct(productId, update);
    if (response) {
        res.status(200).json({
            status: 'Success!',
            message:`Product with id ${response._id} updated successfully!`
        })
    }
    else {utils.sendNotFoundError(res,'Product')}
}
exports.deleteProduct = async (req, res) => {
    let productId = req.params.id;
    const response = await Product.removeProduct(productId)
    if (response) {
        res.status(200).json({
            status: 'Success!',
        message:'Product deleted successfully!'})
    }
    else {utils.sendNotFoundError(res,'Product')}
}