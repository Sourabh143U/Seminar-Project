import {app} from "./app.js";
import {connectDb} from "./config/database.config.js";

connectDb();
app.listen(7000,()=>{
    console.log("Server is Starting ");
});