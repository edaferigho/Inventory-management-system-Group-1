const Product = require('../model/productModel');
const utils = require('../utils/utils')

const responseInfo = {
    status: "",
    message: ""
}

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
                status: 'Success!',
                product
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
        let user = req.user;
        let product = req.body
        product.imageURL = req.file.filename
        product.userid = user._id;

        let response = await Product.create({...product})
        if(response){

            productId = response._id
            responseInfo.status = "success"
            responseInfo.message = "Product added successfully"
            responseInfo.data = response
            res.send(responseInfo)
        }
        else {
            res.send(`Product could not be added to the database`)
        }


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