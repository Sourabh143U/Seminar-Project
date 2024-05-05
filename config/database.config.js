import mongoose from "mongoose";
const DB_URL = "mongodb+srv://maharashtrawonder123:SSTourism23456789@maharashtrawonders.yyupi7l.mongodb.net/";
export const connectDb = () =>{
    mongoose.connect(DB_URL,{
        dbName:"TourData",
    }).then(()=> {
        console.log("Database Connected ");
    }).catch((err) => {
        console.log(err);
    });
}