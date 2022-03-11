const mongoose=require('mongoose');
const { Schema, model } = require("mongoose");
const schema=new Schema({
    Name: {
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    ReferredUser:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    isPaymentMade:{
        type:Boolean,
        default:false
    },
    TotalEarnings:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});
const User = model("User", schema);
module.exports=User;