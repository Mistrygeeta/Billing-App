const mongoose = require("mongoose");


const invoiceSchema = new mongoose.Schema({
    customerName:{
        type: String,
        required: true
    },
    products:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Product",
                required: true
            },
            quantity:{
                type:Number,
                required: true
            }
        }
    ],
    totalAmount:{
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{timestamps: true});

const invoiceModel = mongoose.model("Invoice",invoiceSchema);

module.exports = invoiceModel;