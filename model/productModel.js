const mongoose = require('./db/database')


const productSchema=mongoose.Schema({
    brand: {type:String,required:true},
    name: {type:String,required:true},
    category: { type: String, required: true },
    description: { type: String, required: true },
    processor: { type: String, required: true },
    RAM: { type: String, required: true },
    Storage: { type: String, required: true },
    OS: { type: String, required: true },
    price: { type: Number, required: true },
    no_remaining: { type: String, required: true },
    imageURL: { type: String, required: true },
    userid:{type:mongoose.Schema.Types.ObjectId,ref:'Users',required:true}
});

const Product = mongoose.model('Product', productSchema)

exports.getProducts = async (userid) => {
    let productFound;
    try {
         productFound = await Product.find({userid})
    } catch (error) {
        console.error(error);
    }
    return productFound;
}
exports.getProduct = async (productId) => {
    let productFound;
    try {
         productFound = await Product.findById(productId)
    } catch (error) {
       console.error(error); 
    }
    return productFound;
}
exports.add = async(product) => {
    let response;
   try {
         response = await Product.create({...product})
   } catch (error) {
       console.error(error);
    }
    return response
}
exports.removeProduct = async (productId) => {
    let response
    try {
         response = await Product.findByIdAndDelete(productId)
    } catch (error) {
        console.error(error);
    }

}
exports.updateProduct = async(productId,update) => {
    let response;
    try {
        response = await Product.findByIdAndUpdate(productId,{...update})
    } catch (error) {
        console.error(error);
    }
    return response;
}


