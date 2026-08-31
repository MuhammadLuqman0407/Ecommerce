import app from "./src/app.js";
import connectionDB from "./config/database.js";
import 'dotenv/config';

connectionDB();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})