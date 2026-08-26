import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 4000;

// allow multipe origins
const allowedOrigins = ['http://localhost:5173']

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins, credentials:true}));


app.get('/', (req,res) => {
    res.send("Api is working ");
})

app.listen(port, () => (
    console.log(`server is running on http://localhost:${port}`)
))