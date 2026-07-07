const productModel = require("../models/product.model");



async function addProduct(req, res) {
    try {
        const{name, price, stock, category} = req.body;

        const product = await productModel.create({
            name,
            price,
            stock,
            category,
            user: req.user.id
        }) ;

        return res.status(201).json({
            message: "product created Succesfully",
            product
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
};

async function getAllProducts(req, res) {
    try {

        const products = await productModel.find({user: req.user.id});
        if(products.length===0){
            return res.status(404).json({
                message: "product not found"
            })
        };

        return res.status(200).json({
            message: "fetched products successfully",
            products
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
};

async function getProduct(req, res) {
    try {
        const product = await productModel.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if(!product){
            return res.status(404).json({
                message: "product not found"
            })
        };

        res.status(200).json({
            message: "product fetched successfully",
            product
        });
    } catch (error) {
       res.status(500).json({
        message: "Internal server error",
        error: error.message
       }) 
    }
};

async function updateProduct(req, res) {
    try {
        const{name, price, stock, category} = req.body;

        const updatedproduct = await productModel.findOneAndUpdate({
            _id: req.params.id,
            user: req.user.id},
        {name, price, stock,category},{new: true});

        if(!updatedproduct){
            return res.status(404).json({
                message: "product not found"
            })
        };
        res.status(200).json({
            message: "product updated successfully",
            updatedproduct
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
};

async function deleteProduct(req, res) {
    try {
        const product = await productModel.findOneAndDelete({_id:req.params.id,
            user: req.user.id
        });

        if(!product){
            return res.status(404).json({
                message: "product not found"
            })
        };

        res.status(200).json({
            message: "product deleted successfully",
            product
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}
module.exports = {addProduct,getAllProducts,getProduct,updateProduct,deleteProduct};