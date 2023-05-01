const express=require("express")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const connection=require("./database/connection")
const studentData=require("./routes/employees")
const {UserModel}=require("./model/projectModel")

const app=express()

app.use(bodyparser.json())
app.use(studentData)

app.get('/getProducts',async (req,res)=>{
    const result=await UserModel.find()
    console.log(result)
    res.send(result)
})


app.listen(8001, ()=>{
    console.log("running server on 8001")
    connection()
    // try {
    //     await connection
    //     console.log('the server is running at port 5050')
    // } catch (error) {
    //     console.log(err)
    // }
})