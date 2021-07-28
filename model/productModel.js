const mongoose = require('./db/database')


const productSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    RAM: {
        type: String,
        required: true
    },
    Storage: {
        type: String,
        required: true
    },
    OS: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    no_remaining: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', required: true
    }
});

const Product = mongoose.model('Products', productSchema)
module.exports = Product