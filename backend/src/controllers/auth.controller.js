const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


async function register(req,res) {
    try { 
    const {name,email, password} = req.body;
    
    const isUserAlreadyExist = await userModel.findOne({email});

    if(isUserAlreadyExist){
        return res.status(409).json({
            message: "user Already exist"
        })
    };
    const hashPassword = await bcrypt.hash(password,10);
    const user = await userModel.create({
        name,
        email,
        password: hashPassword
    })

    user.password = undefined;

    const token = jwt.sign({id: user._id},process.env.JWT_SECRET,
        {expiresIn : "1d"}
    );
    res.status(201).json({
        message: "user created successfully",
        user,
        token
    })
}
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
};

async function login(req, res) {
    try {
        const {email, password} = req.body

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(404).json({
                message: "user not found"
            })
        };

        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){
            return res.status(401).json({
                message :"Invalid password"
            })
        };

        user.password = undefined;
        
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET,
            {expiresIn : "1d"}
        )
        res.status(200).json({
            message : "user fetched successfully",
            user,
            token
        })
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message
      })  
    }
}
module.exports = {register,login};