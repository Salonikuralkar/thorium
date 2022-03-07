const mongoose = require('mongoose');
const userSchema = new mongoose.Schema( {
    name: String,
    balance:{
        type: Number,
        default:true
    },
    address: String,
    age:Number,
    gender: {
        type: String,
        enum: ["male", "female", "Other"] 
    },
    isFreeAppUser: {
        type:Boolean,
        default:false
    
}, });
module.exports = mongoose.model('NewUser', userSchema) 


