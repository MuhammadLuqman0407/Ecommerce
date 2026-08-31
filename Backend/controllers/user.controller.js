import User from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";


// register User : /api/user/register
export async function register(req, res) {
    try {
        const { username, email, password } = req.body;

        const isAlreadyRegistered = await User.findOne({
            $or: [
                { username },
                { email }
            ]
        });

        if (isAlreadyRegistered) {
            return res.status(409).json({
                message: "Username or email already exists"
            });
        }

        const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        // Set token as cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        // Return token and user info in response for Postman visibility
        return res.json({
            // "message": "Registered Successfully",
            success: true,
            token,
            user: { email: user.email, username: user.username }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}


// Login User : /api/user/login
export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }
        const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
        const isPasswordValid = hashedPassword === user.password;

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.json({
            // "message": "Login Successfully",
            success: true,
            token,
            user: { email: user.email, username: user.username }
        })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}


// check Auth : /api/user/is-auth

export const isAuth = async(req, res) => {
    try{
        const {userId} = req.body;
        const user = await User.findById(userId).select("-password");
        return res.json({success:true, user});
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({success:false, message:error.message});
    }
}


// Logout User : /api/user/logout
export const logout = (req, res) => {
    try{
        res.clearCookie("token", {
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        return res.json({
            success: true, 
            message: "Logged out successfully"
        })
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({success:false, message:error.message});
    }
}