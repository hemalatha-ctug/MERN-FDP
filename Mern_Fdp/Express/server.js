const express = require('express')
const app=express();
const router = require('./Routers/egRoute')
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json())

app.use(router)

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})