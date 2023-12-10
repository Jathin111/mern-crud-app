const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must provide the name"],
        trim:true,
        maxlength:[20,"name canot be more than 20 characters"],

    },email:{
        type:String,
        required:[true,"Must provide an email"],
    },age:{
        type:Number,
        required:[true,"Must provide your age"],
    }
})

const userModel = mongoose.model('users', TaskSchema)
module.exports = userModel