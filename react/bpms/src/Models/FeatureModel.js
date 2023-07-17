const mongoose = require('mongoose')

const featureSchema=new mongoose.Schema({
    featureid:{type:String},
    featureDesc:{type:String},
    priority:{type:Number},
    flag:{type:Boolean}
  })

const Feature = mongoose.model('feature',featureSchema);
module.exports = Feature;