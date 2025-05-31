const express = require('express')
const userRouter = express.Router();
const { SignUp, Login } = require('../Controllers/userController')          
userRouter.post('/signup',SignUp);
userRouter.post('/login',Login);


module.exports = userRouter
