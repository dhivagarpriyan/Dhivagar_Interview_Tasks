import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/UserRoutes.js";
import { MONGO_URL } from "./config.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_URL)
.then(()=>console.log("Database connected successfully" ))
.catch((error)=>console.log(error));

app.use(express.json());

app.use("/users",userRoutes);

app.get("/test",(req,res)=>{
    return res.status(200).json("Tested successfully")
})










app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
}) 