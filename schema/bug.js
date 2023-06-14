const mongoose=require('mongoose')
const bug = new mongoose.Schema({
    bugname:{type:String}
})
module.exports=mongoose.model("bugs",bug)