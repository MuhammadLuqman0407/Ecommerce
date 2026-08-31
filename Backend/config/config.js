import dotenv from "dotenv";

dotenv.config();

if(!process.env.MONGODB_URI){
    throw new Error("Mongo Db environment is not set now");
}
if(!process.env.JWT_SECRET){
    throw new Error(" JWT SECRET is not set in the env variable");
}


const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT
}

export default config;

