import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from '../routes/user.route.js';
import sellerRouter from '../routes/seller.route.js';

const app = express();

// allow multipe origins
const allowedOrigins = ['http://localhost:5173', "http://127.0.0.1:5173"]

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(cors({ origin: allowedOrigins, credentials: true }));


app.get('/', (req, res) => {
    res.send("Api is working ");
})

app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);

export default app;