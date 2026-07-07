const invoiceModel = require("../models/invoice.model");
const productModel = require("../models/product.model");


async function createInvoice(req, res) {
    try {
        const {customerName, products} = req.body;
        let totalAmount = 0;

        for (let item of products) {
            const foundProduct = await productModel.findById(item.product);

            if(!foundProduct){
                return res.status(404).json({
                    message : "product not found"
                })
            };

            totalAmount += foundProduct.price * item.quantity
        };

        const invoice = await invoiceModel.create({
            customerName,
            products,
            totalAmount,
            user: req.user.id
        });

        return res.status(201).json({
            message:"invoice created successfully",
            invoice
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
};

async function getAllInvoice(req, res) {
    try {
        const invoice = await invoiceModel.find({
            user: req.user.id
        }).populate("products.product");

        if(invoice.length === 0){
            return res.status(404).json({
                message: "invoice not found"
            })
        };

        return res.status(200).json({
            message: "invoice fetch successfully",
            invoice
        });
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error: error.message
        })
    }
};

async function getInvoice(req, res) {
    try {
        const invoice = await invoiceModel.findOne({
            _id: req.params.id,
            user: req.user.id
        }).populate("products.product");

        if(!invoice){
            return res.status(404).json({
                message: "invoice not found"
            })
        };

        return res.status(200).json({
            message :"invoice found successfully",
            invoice
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error : error.message
        })
    }
};

async function deleteInvoice(req, res) {
    try {
        const invoice = await invoiceModel.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id
        });

        if(!invoice){
            return res.status(404).json({
                message: "invoice not found"
            })
        };

        return res.status(200).json({
            message: " invoice deleted successfully",
            invoice
        });
    } catch (error) {
       res.status(500).json({
        message: "Internal server error",
        error: error.message
       }) 
    }
};

async function updateInvoice(req, res) {
    try {
        const{customerName,products} = req.body;

        const invoice = await invoiceModel.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if(!invoice){
            return res.status(404).json({
                message: "invoice not found"
            })
        };
        
        let totalAmount = 0;

        for (let item of products) {
            const foundProduct = await productModel.findById(item.product);

            if(!foundProduct){
              return  res.status(404).json({
                    message: "product not found"
                })
            }
        
            totalAmount += foundProduct.price* item.quantity;
        }
            const updatedInvoice = await invoiceModel.findOneAndUpdate({
                _id : req.params.id,
                user : req.user.id
            },
        {
            customerName,
            products,
            totalAmount
        },{
            new: true
        }).populate("products.product");

        return res.status(200).json({
            message : "invoice updated successfully",
            updatedInvoice
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}
module.exports = {createInvoice,getAllInvoice,getInvoice,deleteInvoice,updateInvoice};