const Product = require('../model/productModel');
const utils = require('../utils/utils')

const responseInfo = {
    status: "",
    message: ""
}

// Fetch All Product Of A Particular User
exports.getProducts = async (req, res) => {

    try {
        let userid = req.user._id
        const products = await Product.find({userid})

        if (products) {
            res.status(200).json({
                status: 'success!',
                data: products
            })

        } else {
            responseInfo.status = "error"
            responseInfo.message = `Sorry! Products not found.`

            res.send(responseInfo).statusCode(404)
        }

    } catch (error) {
        responseInfo.status = "error"
        responseInfo.message = `Sorry! Something searching for product. Please try again.`

        res.send(responseInfo)
    }

}

// Fetch Single Product
exports.getSingleProduct = async (req, res) => {
    let userid = req.user._id
    const productId = req.params.id

    try {
        const product = await Product.findOne({userid: userid, _id: productId})
        if (product) {

            res.status(200).json({
                status: 'success!',
                data: product
            })

        } else {
            responseInfo.status = "error"
            responseInfo.message = `Sorry! Product not found.`

            res.send(responseInfo).statusCode(404)
        }
    } catch (error) {
        responseInfo.status = "error"
        responseInfo.message = `Sorry! Something searching for product. Please try again.`

        res.send(responseInfo)
    }

}

// Add New Products
exports.addProduct = async (req, res) => {

    try {
        let user = req.user;
        let product = req.body
        product.imageURL = req.file.filename
        product.userid = user._id;

        let response = await Product.create({...product})
        if (response) {
            responseInfo.status = "success"
            responseInfo.message = "Product added successfully"
            responseInfo.data = response

            res.send(responseInfo)

        } else {
            responseInfo.status = "error"
            responseInfo.message = `Sorry! Product could not be added to the database. Please try again`

            res.send(responseInfo)
        }

    } catch (error) {
        responseInfo.status = "error"
        responseInfo.message = `Sorry! Something went wrong while add the product. Please try again`

        res.send(responseInfo)
    }
}

// Update Product
exports.updateProduct = async (req, res) => {
    let productId = req.params.id
    const update = req.body

    try {
        const response = await Product.findByIdAndUpdate(productId, {...update})

        if (response) {
            responseInfo.status = "success"
            responseInfo.message = "Product updated successfully"
            responseInfo.data = response

            res.send(responseInfo)

        } else {
            responseInfo.status = "error"
            responseInfo.message = `Sorry! Could not update product at this time. Please try again`

            res.send(responseInfo)
        }

    } catch (error) {
        responseInfo.status = "error"
        responseInfo.message = `Sorry! Something went wrong while updating product details. Please try again`

        res.send(responseInfo)
    }
}

// Delete Product
exports.deleteProduct = async (req, res) => {
    let productId = req.params.id;
    try {
        const response = await Product.findByIdAndDelete(productId)
        if (response) {

            responseInfo.status = "success"
            responseInfo.message = "Product updated successfully"
            delete responseInfo.data

            res.send(responseInfo)
        } else {

            responseInfo.status = "error"
            responseInfo.message = `Sorry! Could not delete product at this time. Please try again`

            res.send(responseInfo)
        }
    } catch (error) {

        responseInfo.status = "error"
        responseInfo.message = `Sorry! Something went wrong while deleting product. Please try again`

        res.send(responseInfo)
    }
}