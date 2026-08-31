import mongoose from "mongoose";
import config from "./config.js";

async function connectionDB(){
    try{
        await mongoose.connect(config.MONGODB_URI);
        console.log("Database connected Successfully");
    }
    catch(error){
        console.log("Error is here : ",error);
        process.exit(1);
    }
}

export default connectionDB;