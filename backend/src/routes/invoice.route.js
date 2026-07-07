const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const invoiceController = require("../controllers/invoice.controller");
const router = express.Router();



router.post("/create-invoice",authMiddleware,invoiceController.createInvoice);
router.get("/get-invoices",authMiddleware,invoiceController.getAllInvoice);
router.get("/get-invoice/:id",authMiddleware,invoiceController.getInvoice);
router.delete("/delete-invoice/:id",authMiddleware,invoiceController.deleteInvoice);
router.put("/update-invoice/:id",authMiddleware,invoiceController.updateInvoice);


module.exports = router;