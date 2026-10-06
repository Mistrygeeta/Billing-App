const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const categoryController = require("../controllers/category.controller")
const router = express.Router();

router.post("/add-category", authMiddleware, categoryController.addCategory);
router.get("/get-categories",authMiddleware, categoryController.getCategory);
module.exports = router;