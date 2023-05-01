const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    salary:Number,
    department:String,
    lastCompany:String,
    lastSalary:Number,
    overallExp:Number,
    contactInfo:String,
    yearGrad:Number,
    gradStream:String
})
const user=mongoose.model("information",userSchema)

module.exports ={user}