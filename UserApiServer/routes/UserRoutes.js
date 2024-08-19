import express from "express";
const router=express.Router();
import User from "../models/userModel.js";

router.post("/", async(req,res)=>{
    try{
    
        const { name, gender, dob, city, state, pincode } = req.body;

       const user= await User.create({ name, gender, dob, city, state, pincode });
      return  res.status(200).json(user);
       
      
    }catch(error){
        res.status(500).send({message:error.message});
    }
})

// To find all the books
router.get("/", async (req,res)=>{
    
    try{

        const users= await User.find({});
        return res.status(200).json(users)
}catch(error){
    res.status(500).send({message:error.message})
}

})

// To find the book by id
router.get("/:id", async (req,res)=>{
    
    try{
        const {id}=req.params
        const user= await User.findById(id);
        return res.status(200).json(user)
}catch(error){
    res.status(500).send({message:error.message})
}

})

//To find the book by id and update
router.put("/:id", async (req,res)=>{
    
    try{
        const {id}=req.params
        const user= await User.findByIdAndUpdate(id,req.body);
        if(!user){
            res.status(404).send("user not found")
        }
        return res.status(200).send("user updated sucessfully")
}catch(error){
    console.log(error.message)
    res.status(500).send({message:error.message})
}

})

//To delete the book
router.delete("/:id", async (req,res)=>{
    
    try{
        const {id}=req.params
        const user= await User.findByIdAndDelete(id,req.body);
        if(!user){
            res.status(404).send("user not found")
        }
        return res.status(200).send("user deleted sucessfully")
}catch(error){
    console.log(error.message)
    res.status(500).send({message:error.message})
}

})

export default router;