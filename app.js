import express from 'express';

import path from 'path';
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";


export const app = express();

//middlewares 
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.set("view engine","ejs");

// using Routers 
app.use("/",userRouter);



app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/login",(req,res) => {
    res.render("login");
});

app.get("/SignUp",(req,res) => {
    res.render("SignUp");
})

app.post("/SignUp",(req,res) => {
    res.redirect("/");
});
// app.post("/login",(req,res) => {
//     res.redirect("/");
// });