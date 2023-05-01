// const projectmodel=require("../model/employee");
const { user } = require("../model/projectModel");

const finddetails= async (req,res)=>{
    const EmployeeData=req.body;

    try{
        const employeeobj=new user({
            firstName:EmployeeData.firstName,
            lastName:EmployeeData.lastName,
            salary:EmployeeData.salary,
            Department:EmployeeData.Department,
            lastCompany:EmployeeData.lastCompany,
            lastSalary:EmployeeData.lastSalary,
            overallExp:EmployeeData.overallExp,
            contactInfo:EmployeeData.contactInfo,
            yearGrad:EmployeeData.yearGrad,
            gradStream:EmployeeData.gradStream
        })
        const validateResult=await employeeobj.validate()
        console.log(validateResult)
        const insertOneResponse=await employeeobj.save()  
        console.log("insertOneResponse",insertOneResponse)
        return res.status(200).send({success:insertOneResponse})
       
    } catch(error){
        console.log('Error while operating db =>', error)
        return res.status(500).send({message:"Error"})
    }
}
const findAllEmployeeInDB = async (req, res) => {
    try {
        const dbResponse = await user.find({});
        console.log("Data is fetched =>", dbResponse)
        return res.status(200).send({message: dbResponse})
    } catch(error) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}
//  error

const stuSalMore=async (req,res)=>{
    try {
        const dbResponse = await user.find({salary:{$gte:30000}});
        console.log("Data is fetched =>", dbResponse)
        return res.status(200).send({message: dbResponse})
    } catch(error) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    } 
   
}
const dataByExp=async (req,res)=>{
    try {
        const dbResponse = await user.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}})
        console.log("Data is fetched =>", dbResponse)
        return res.status(200).send({message: dbResponse})
    } catch(error) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    } 
   
}
const updateSalary=async (req,res)=>{
    try {
        const dbResponse = await user.updateOne({department:'HR',$set:{salary:50000}})
        console.log("Data is fetched =>", dbResponse)
        return res.status(200).send({message: dbResponse})
    } catch(error) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    } 
   
}
const stuDelete=async (req,res)=>{
    try {
        const dbResponse = await user.deleteMany({lastCompany:{$gt:"Y"}})
        console.log("Data is fetched =>", dbResponse)
        return res.status(200).send({message: dbResponse})
    } catch(error) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    } 
   
}

module.exports ={
    finddetails,
    findAllEmployeeInDB,
    stuSalMore,
    updateSalary,
    dataByExp,
    stuDelete
}