const express=require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app=express();
app.use(cors());
app.use(express.json());
app.listen(3001,console.log("server running at port 3001"));
const dotenv=require("dotenv");
const User = require('./src/Models/UserModel');
const Bug = require('./src/Models/BugModel');
const Feature = require('./src/Models/FeatureModel');
const { ConnectionCloseError } = require('web3');
dotenv.config();



mongoose
  .connect(`${process.env.MONGO_URI}`, {
    dbName: "bpms",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection success!"))
  .catch((err) => console.log("Error: " + err));



// Login start
app.post('/login',async(req,res)=>{
  console.log(req.body.email)
  let person =  await User.findOne({email:req.body.email})
  console.log("fetching the details")
  console.log(person.password +" password in then")
  if(person.password===req.body.password){
    res.json({status:"let him in",role:`${person.role}`});
  }
  else{
    res.json({status:"dont let him in"});
  }

})
// Login end



// Fetching Bugs start
app.get('/bugs',async(req,res)=>{
  try{
    const Bugs = await Bug.find();
    res.json(Bugs)
  }
  catch(err){
    console.log(err +" , this happened in server (fetching bugs)")
  }
})
// Fetching Bugs end



// Fetching Features satrt 
app.get('/features',async(req,res)=>{
  try{
    const Features = await Feature.find();
    res.json(Features)
  }
  catch(err){
    console.log(err +" , this happened in server (fetching features)")
  }
})
//Fetching Features end



// Reporting Bugs satrt
  app.post('/Report', async (req,res)=>{
    console.log(req.body)
    try{
        await Bug.create({
        bugid:req.body.bugid,
         bugDesc:req.body.bugDesc,
         priority:req.body.priority,
         flag:true});
         res.send("ok");
    }
    catch(err){
        res.json(err+ ', this happened in server(reporting bug)')
    }

  })
// Reporting bug end

//Requesting features
app.post('/Request',async(req,res)=>{
  try{
    await Feature.create({
      featureid:req.body.featureid,
      featureDesc:req.body.featureDesc,
      priority:req.body.priority,
      flag:true
    })
    res.send("ok");
  }
  catch(err){
    res.json(err + 'this happened in server(requesting feture)')
  }
})
//Requesting features

// Setting priority start
app.post('/Priority',async(req,res)=>{
  try{
    // Feature.find({priority:-1})
    console.log(req.body);

    if(req.body[req.body.length-1]=='bugs'){
      for(let i=0;i<req.body.length;i++){
        console.log(req.body[i]);
        Bug.findOneAndUpdate(
          { bugid: Object.keys(req.body[i]) },
          { priority: parseInt(Object.values(req.body[i])) },
          { new: true }
        )
          .then(updatedProduct => {
            console.log('Updated product:', updatedProduct);
            res.send("ok");
          })
          .catch(error => {
            console.error('Error updating product:', error);
          });
      }
      }
      if(req.body[req.body.length-1]=='features'){
        for(let i=0;i<req.body.length;i++){
          console.log(req.body[i]);
          Feature.findOneAndUpdate(
            { featureid: Object.keys(req.body[i]) },
            { priority: parseInt(Object.values(req.body[i])) },
            { new: true }
          )
            .then(updatedProduct => {
              console.log('Updated product:', updatedProduct);
              res.send("ok");
            })
            .catch(error => {
              console.error('Error updating product:', error);
            });
        }
        }
  }
  catch(err){
    res.json(err+'this error happend in server(Setting priority)')
  }

})

// Setting priority end

//Changing flag start
app.post('/Flag',async(req,res)=>{

    for(let i=0;i<req.body[0].length;i++){

    Bug.findOneAndUpdate(
      { bugid: (req.body[0][i]) },
      { flag: false },
      { new: true }
    )
      .then(updatedProduct => {
        console.log('Updated product:', updatedProduct);
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  }
  for(let i=0;i<req.body[1].length;i++){
    Feature.findOneAndUpdate(
      { featureid: (req.body[1][i]) },
      { flag: false },
      { new: true }
    )
      .then(updatedProduct => {
        console.log('Updated product:', updatedProduct);
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  }
  res.send("ok");
}) 
//Changing flag end 



