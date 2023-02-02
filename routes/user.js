const express=require('express');
const { deleteAllUser, deleteUser, updateUser, createUser, getUser } = require('../controllers/controllers');
const userRouter=express.Router();



userRouter.get('/',getUser);
userRouter.post('/',createUser);
userRouter.put('/:id',updateUser);
userRouter.delete('/:id',deleteUser);
userRouter.delete('/',deleteAllUser)


module.exports= userRouter