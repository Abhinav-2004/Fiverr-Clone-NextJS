import { Prisma, PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken";
const generatePassword= async(password)=>{
    const salt=await genSalt();
    return await hash(password,salt);
}
const maxAge=3*24*60*60;
const createToken=(email,userId)=>{
    return jwt.sign({email,userId}, process.env.JWT_KEY);
        expiresIn:maxAge
}
export const signup=async(req,res,next)=>{
    try{
        const prisma=new PrismaClient();
        const {email,password}=req.body;
        if(email && password){
            const user=await prisma.user.create({
                data:{
                    email,
                    password: await generatePassword(password),
                },
            });
            return res.cookie("jwt", createToken(email,user.id),{httpOnly:false,
            maxAge:maxAge*1000 }).status(201).json({id:user.id, email:user.email})
        }
        return res.status(400).send("Email and Password are required");
    
    
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};