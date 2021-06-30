import dotenv from "dotenv";
dotenv.config({ path:"./config.env"});
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import routes from "./routes/auth.js";
import bodyParser from "body-parser"
import session from "express-session";

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({origin: 'http://localhost:3000', credentials: true}));

//Session
app.use(session({
    key:"userid",
    secret:"syam",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60*60*60,
    },
}))

//DB Connection 

connectDB();
const PORT = process.env.PORT || 3001;

// App Config

//Routes
app.use("/", routes)

app.listen(PORT,()=>{console.log("Server is running on port 3001");})