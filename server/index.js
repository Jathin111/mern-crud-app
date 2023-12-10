const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()
const connectDB = require('./db/Connect')
const userModel  = require('./models/User')

const app = express()
app.use(cors())
app.use(express.json())

app.post("/createUser",(req,res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.get("/",(req,res)=>{
    userModel.find({})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})
app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
const port = 3000

// const start = async() =>{
//     try {
//         await mongoose.connect(process.env.MONGO_URI,console.log("Is Connected"))
//         app.listen(port, console.log(`server is listening at port ${port}...`))

//     } catch (error) {
//         console.log(error)
//     }
// }

// start()
//AlZWZq58KwB6rKiW

app.listen(port,console.log(`The port is connected`,port))
mongoose.connect(process.env.MONGO_URI,console.log("Connected"))
