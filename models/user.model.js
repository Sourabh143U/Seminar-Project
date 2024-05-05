import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fName:{
        type:String,
        required:true,
        
    },
    lName:{
        type:String,
        required:true, 
       
    },
    contact:{
        type:String,
        required:true, 
        unique:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:10,
        unique:true,
    },
    gender:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        select:false,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export const User = mongoose.model("User",userSchema);