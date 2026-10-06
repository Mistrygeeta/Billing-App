const categoryModel = require("../models/category.model");

async function addCategory(req, res){
try {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({
            message: "Category name is required"
        });
    }

    const category =await categoryModel.create({
        name,
        user: req.user.id
    });
     res.status(200).json({
        message: "category added successfully"
     })
} catch (error) {
    res.status(500).json({
        message: "Internal server error",
        Error: error.message
    })
}
};

module.exports = {addCategory};