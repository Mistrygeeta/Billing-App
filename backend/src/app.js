const express = require("express");
const cors = require("cors")
const authRouter = require("./routes/auth.route");
const productRouter = require("./routes/product.route");
const invoiceRouter = require("./routes/invoice.route");
const dashboardRouter = require("./routes/dashboard.route");
const app= express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/product",productRouter);
console.log("PRODUCT ROUTE LOADED");
app.use("/api/invoice",invoiceRouter)
app.use("/api/dashboard",dashboardRouter);
module.exports = app;