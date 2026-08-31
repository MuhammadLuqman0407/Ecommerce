import { Router } from "express";
import { register, login, logout, isAuth } from "../controllers/user.controller.js";
import authUser from "../middlewares/auth.user.middleware.js";

const userRouter = Router();

// Post - api
userRouter.post("/register", register);
userRouter.post("/login", login);

userRouter.get('/is-auth', authUser, isAuth);
userRouter.get("/logout", authUser, logout);

export default userRouter;