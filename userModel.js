const mongoose = require("mongoose")
const productModel = require ("./productmodel")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:false // This should be false by default?
    },
    isOrganizer:{
        type:Boolean,
        required:false // This should be false by default?
    },
    isUser:{
        type:Boolean,
        required:true // This should be true by default?
    },
    tickets:[ticketingModel.schema],
    products:[productModel.schema]
},{timestamps:true})
