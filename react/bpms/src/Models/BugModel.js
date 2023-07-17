const mongoose = require('mongoose')

const bugSchema=new mongoose.Schema({
    bugid:{type:String},
    bugDesc:{type:String},
    priority:{type:Number},
    flag:{type:Boolean}
  })

const Bug = mongoose.model('Bug',bugSchema);
module.exports = Bug;