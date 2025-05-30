const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task:String,
    completed:{type:Boolean,default:false}
})
module.exports = mongoose.model('todo',todoSchema)