import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/AuthRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app=express();
const port = process.env.port;
app.use(cors({
    origin:[process.env.PUBLIC_URL], 
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials:true,//because we need to use cookies
}))
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});
