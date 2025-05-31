const express = require('express')
const app=express();
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const router = require('./Routers/egRoute')
const cors=require('cors')

dotenv.config();
connectDB();
const PORT = process.env.PORT;
app.use(cors())
app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})