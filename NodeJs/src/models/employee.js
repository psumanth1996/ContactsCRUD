const mongoose = require('mongoose')
const validator = require('validator')
const employeeSchema = new mongoose.Schema(
    {
       FirstName:{
            type:String,
            required:true,
        },

        LastName:{
            type:String,
            required:true,
        },
        Phone:{
            type:Number,
            required:true
        }
        
    }
)


const employee = mongoose.model('Employee',employeeSchema)

// const me = new employee({
//     FirstName:"kevin",
//     LastName:"Joseph",
//     Phone:9844726619
// })

// me.save().then(()=>{
//     console.log(me);
// }).catch((e)=>{
//     console.log(e);
// })
module.exports = employee