const userSchema=require('../models/user');


//create user
exports.createUser=async(req,res)=>{
    try{
        const addUser= await new userSchema(req.body)
        addUser.save();
        res.status(200).json({'sucess':true,'result':addUser})
    }   
    catch{
        res.status(500).send("failed to add new user")
    }
}

//update user
exports.updateUser=async(req,res)=>{
    try{
        const{id}=req.params;
        const updated= await userSchema.findByIdAndUpdate(id,{$set:{...req.body}})  
        res.status(200).json({'sucess':true,'result':updated})
    }   
    catch{
        res.status(500).send({"failed to update user":true})
    }
}

//find user
exports.getUser=async(req,res)=>{
    try{
        const founded= await userSchema.find({},{_id:true, name:true, age:true})
        res.status(200).json({message:'this is all the users','result':founded})
    }   
    catch{
        res.status(500).send({"failed to get user":true})
    }
}

//delete user
exports.deleteUser=async(req,res)=>{
    try{
        const{id}=req.params;

        const deleted= await userSchema.findByIdAndDelete(id)
        res.status(200).json({message:'this is  the deleted user','result':deleted})
    }   
    catch{
        res.status(500).send({"failed to delete user":true})
    }
}

//delete all users
exports.deleteAllUser=async(req,res)=>{
    try{
        const removed= await userSchema.deleteMany()
        res.status(200).json({message:'all users was deleted','result':removed})
    }   
    catch{
        res.status(500).send({"failed to delete all users":true})
    }
}