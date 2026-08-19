import express from "express";
import { client } from "@repo/db/client";

const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello from http-server");
});
app.post("/signup",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    
    const user=await client.user.create({data:{username,password}});
    res.json({
        message:"User created successfully",
        id:user.id
    });
});
app.listen(3002,()=>console.log("http-server listening on port 3002"));