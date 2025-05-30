const mongoose = require('mongoose')
const connectDB =async () => {
    try{
        await mongoose.connect('mongodb+srv://hemalathactug:Hema1992@cluster0.i5mne9p.mongodb.net');
        console.log("MongoDB Connected");
    }catch(err){
        console.log(err)
    }
}
module.exports = connectDB;
