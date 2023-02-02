const express=require('express');
const app= express();
const port=5003;
const userRouter=require('./routes/user')
const connectDb=require('./config/connectDb');
app.use(express.json());
app.use('/api/users',userRouter);

connectDb()



app.listen(port,(err)=>{
    err?
    console.error(err)
    :
    console.log(`server run in succes in port:${port}`)
})