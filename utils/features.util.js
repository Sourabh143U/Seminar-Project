import jwt from "jsonwebtoken";
const JWT_SECRET = "skdjfdfnsdkfnsdkjfnsdfnsdfnsddfksad";


export const sendCookie = (user,res) => {
    const token = jwt.sign({_id:user._id},JWT_SECRET);
    res.cookie("token",token,user._id,{
        httpOnly:true,
        expires : 60*60*1000,
    });
};