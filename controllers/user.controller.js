import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";


export const loginUser = async (req,res) =>{

    const {email,password} = req.body;
    let user = await User.findOne({email});

    if(!user){
        return res.redirect("/SignUp");
    }

    console.log(typeof(password),typeof(user.password));

    const isPasswordMatch = await bcrypt.compare(password,user.password);
    if(!isPasswordMatch){
        return res.render("/login");
    }
    res.redirect("/"); 
}

export const registerUser = async (req,res) =>{
    const {fName,lName,email,gender,password,contact} = req.body;

    let user = await User.findOne({email});
    if(user){
        return res.redirect("/login");
    }
    const hashedPassword = await bcrypt.hash(password,10);
     user = await User.create({
        fName,
        lName,
        contact,
        email,
        gender,
        password:hashedPassword,
    });

    console.log(user);

    // This is for Testing Purpose 
    //res.status(201).json({
    //     success:true,
    //     message:"Registered SuccessFully ",

    // });

    res.redirect("/login");  
}

