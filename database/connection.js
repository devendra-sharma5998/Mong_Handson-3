const mongoose=require('mongoose')
const url="mongodb://127.0.0.1:27017/student"
// const connection=mongoose.connect("")

const Connection=async()=>{
try {
  console.log("connection to database")
  const response=await mongoose.connect(url);
  console.log("connected")
} catch (error) {
    console.log(error.message)
}
}

module.exports=Connection