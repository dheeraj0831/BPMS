const mongoose = require('mongoose')
const UserSchema=new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    role:{type:String}
  })

  const User = mongoose.model('User',UserSchema);
  module.exports = User;