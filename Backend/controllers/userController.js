import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login_user

const loginUser = async (req, res) => {
     

}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET);

}

//register_user

const registerUser = async (req, res) => {
     const {name,email,password} = req.body;
     try {
        //  check if the user already exists
         const exist = await userModel.findOne({email});
         if (exist) {
             return res.json({success:false,message:"User already exist"});
         }

         // validate the email format and strong password
         if (!validator.isEmail(email)) {
             return res.json({success:false,message:"Invalid Email"});
         }
            //chaeck the length o f the password
            if (password.length < 8) {
                return res.json({success:false,message:"Password must be atleast 8 characters"});
            }
            //hasing user password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,salt);

            const  newUser = new userModel({
                name:name,
                email:email,
                password:hashedPassword
            });

            const user = await newUser.save();
            const token = createToken(user._id);
            res.json({success:true,token});

     } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
     }

}



export { loginUser, registerUser }