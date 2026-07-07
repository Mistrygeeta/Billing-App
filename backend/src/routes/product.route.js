const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/add-product",authMiddleware,productController.addProduct);
router.get("/get-products",authMiddleware,productController.getAllProducts);
router.get("/get-product/:id",authMiddleware, productController.getProduct)
router.put("/update-product/:id",authMiddleware,productController.updateProduct);
router.delete("/delete-product/:id",authMiddleware, productController.deleteProduct);


module.exports = router;