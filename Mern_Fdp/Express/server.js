const express = require('express')
const app=express();
const dotenv = require('dotenv')
dotenv.config();
const connectDB = require('./config/db')
const router = require('./Routers/egRoute')
const userRouter = require('./Routers/userRoutes');
const cors=require('cors')
connectDB();
const PORT = process.env.PORT;
app.use(express.json())
app.use(cors())
app.use(router)
app.use('/user',userRouter)
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})