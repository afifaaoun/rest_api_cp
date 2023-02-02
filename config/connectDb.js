const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const URI=process.env.MONGO_URI;

const connectDb=async()=>{
    try{
        await mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log('connected to database');
    }
    catch(err){
        console.log(err);
    }
}

module.exports=connectDb