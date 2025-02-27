const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: false
    },
    date:{
        type:Date,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    category:{
        type:String, //boolean wala eh
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
    },
    booking:[{  
        type: mongoose.Schema.Types.ObjectId,//wala boolean? prob boolean wala eh
        ref: "booking"

    }],
    tickets: {
        type: Number,
        required: true
    }
},{timestamps:true})

const eventModel = mongoose.model("event",eventSchema)
module.exports=eventModel