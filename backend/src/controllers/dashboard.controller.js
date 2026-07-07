const invoiceModel = require("../models/invoice.model");
const productModel = require("../models/product.model")

async function getTotalProducts(req, res) {
    try {
        const totalProducts = await productModel.countDocuments({
            user : req.user.id
        });

        return res.status(200).json({
            message : "total Products fetched successfully",
            totalProducts
        })

    } catch (error) {
        res.status(500).json({
            message : "Internal server error",
            error: error.message
        })
    }
}

async function getTotalInvoices(req, res) {
    try {
        const totalInvoices = await invoiceModel.countDocuments({
            user : req.user.id
        });

        return res.status(200).json({
            message : "Invoice fetched successfully",
            totalInvoices
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error : error.message
        })
    };
};

async function getTotalRevenue(req, res) {
    try {
        const totalInvoices = await invoiceModel.find({
            user : req.user.id
        });

        let totalRevenue = 0;

        for (let ele of totalInvoices) {
            totalRevenue += ele.totalAmount
        }

        return res.status(200).json({
            message : "total Revenue fetched successfully",
            totalRevenue
        });
    } catch (error) {
       res.status(500).json({
        message : "Internal server error",
        error : error.message
       }) 
    }
};

async function getLowStockProducts(req, res) {
    try {
        const products = await productModel.find({
            user : req.user.id,
            stock :{$lt :5}
        });
        return res.status(200).json({
            message: "Low Stock Product fetched successfully",
            products
        })
    } catch (error) {
        res.status(500).json({
            message : "Internal server error",
            error: error.message
        })
    }
};

module.exports = {getTotalProducts, getTotalInvoices,getTotalRevenue,getLowStockProducts};