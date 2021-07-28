const Product = require('../model/productModel');
const utils = require('../utils/utils')

// This returns all products for the current user
exports.getProducts = async (req, res) => {
    try {
        let userid = req.user._id
        const products = await Product.find({userid})
        res.json(products)
    } catch (error) {
        console.log(error)
    }

}
// This returns a particular product for a particular user
exports.getProduct = async (req, res) => {
    let userid = req.user._id
    const productId = req.params.id;
    try {
        const product = await Product.find({userid: userid, _id: productId})
        if (product) {
            res.status(200).json({
                status: 'Success!', product
            })
        } else {
            utils.sendNotFoundError(res, 'Product')
        }
    } catch (error) {
        console.error(error)
    }

}
//TODO: Properly arrange code in all files

// This adds products
exports.addProduct = async (req, res) => {
    // TODO: Destructure all product's fields and perform validation on them
    try {
        let product = req.body
        product.imageURL = req.file.filename
        let user = req.user;
        product.userid = user._id;
        let response = await Product.create({...product})
        res.status(201).json(`Product with id: ${response._id} added successfully`)
    } catch (error) {
        console.error(error)
    }
}
exports.updateProduct = async (req, res) => {
    let productId = req.params.id;
    const update = req.body;
    try {
        const response = await Product.findByIdAndUpdate(productId, {...update});
        if (response) {
            res.status(200).json({
                status: 'Success!',
                message: `Product with id ${response._id} updated successfully!`
            })
        } else {
            utils.sendNotFoundError(res, 'Product')
        }
    } catch (error) {
        console.error(error)
    }
}
exports.deleteProduct = async (req, res) => {
    let productId = req.params.id;
    try {
        const response = await Product.findByIdAndDelete(productId)
        if (response) {
            res.status(200).json({
                status: 'Success!',
                message: 'Product deleted successfully!'
            })
        } else {
            utils.sendNotFoundError(res, 'Product')
        }
    } catch (error) {
        console.error(error)
    }


}