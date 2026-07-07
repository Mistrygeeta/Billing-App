const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    category:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},{timestamps: true});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;