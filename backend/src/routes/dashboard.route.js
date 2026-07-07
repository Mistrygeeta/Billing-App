const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const dashboardController = require("../controllers/dashboard.controller")
const router = express.Router();


router.get("/total-products",authMiddleware,dashboardController.getTotalProducts);
router.get("/total-invoices",authMiddleware,dashboardController.getTotalInvoices);
router.get("/total-revenue",authMiddleware,dashboardController.getTotalRevenue);
router.get("/low-stock-products",authMiddleware,dashboardController.getLowStockProducts);

module.exports = router;