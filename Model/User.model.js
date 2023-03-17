const mongoose = require('mongoose');
const emailValidator = require('deep-email-validator');
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your name"],
        unique:true,
    },
    age:{
        type:Number,
        required:true,
        min:[0,"Age should be Positive"],
        validate:{
            validator:(value)=>{
                const isInteger = Number.isInteger(value);
                if(isInteger)
                    return true;
                else
                    return false;
            },
            message:"Age must be Integer"
        }
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Email already exists'],
        validate:{
            validator:async (value)=>{
                const {valid} = await emailValidator.validate(value);
                if(valid)
                    return false;
                else
                    return true;
            },
            message:"Please provide a valid email"
        }
    },
    date_of_birth:{
        type:Date
    },
    occupation:{
        type:String,
        required:true,
        enum:{
            values:["Student","Teacher","Staff"],
            message:"Occupation can't be {VALUE}"
        }
    }
},{
    timestamp:true
})


const User = mongoose.model("Users",UserSchema);
module.exports = User;