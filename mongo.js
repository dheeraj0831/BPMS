const express=require('express')
const app=express()
// const mongoose=require('mongoose')
app.use(express.json())
const bug = require('./schema/bug')
const cors= require('cors')
app.use(cors())

// const mongoURL="mongodb+srv://dheeraj0831:dheeraj0831@cluster0.vstk7gi.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('we have data')})
app.listen(4000,()=>{
    console.log("server started")
})
const fs = require('fs');
const exeBuffer = fs.readFileSync('path/to/exe/file');
const base64String = exeBuffer.toString('base64');
console.log(base64String);


// app.post("/addbug",async (request,response)=>{
//     await bug.create(request.body)
// })




