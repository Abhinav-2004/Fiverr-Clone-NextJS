import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app=express();
const port = process.env.port;
app.use(cors({
    origin:[process.env.PUBLIC_URL], 
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials:true,//because we need to use cookies
}))
app.use(express.json());
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});
