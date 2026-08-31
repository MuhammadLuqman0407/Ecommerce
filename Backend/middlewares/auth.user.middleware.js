import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import 'dotenv/config';

const authUser = (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    if(!token){
        return res.json({success:false, message: "Not Authorized - No token provided"});
    }
    try{
        const tokenDecoder = jwt.verify(token, process.env.JWT_SECRET);
        if(tokenDecoder.id){
            req.body = req.body || {};
            req.body.userId = tokenDecoder.id;
        }        
        else{
            return res.json({success:false, message: "Not Authorized"});
        }
        next();
    }
    catch(error){
        console.log(error.message);
        res.json({success:false, message: error.message});
    }
}

export default authUser;

