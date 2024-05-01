import mongoose from "mongoose";

const gSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        trim : true,
        lowercase: true,
        unique: true,
        required : true
    },
    phone : {
        type : String,
        minLength : 10
    },
    rating : {
        type : Number,
        min : 0,
        max : 10,
        default : 0
    },
    DOB : {
        type:String,
        required:true, 
        trim:true
    },
    password : {
        type : String,
        minLength : 4,
        maxLength : 20,
        trim : true,
        required : true
    },
    gender : {
        type : String,
        required : true,
        enum: ['male', 'female', 'other']
    },
    flowCount : {
        type : Number,
        default : 0
    }

},{timestamps:true});  

export default mongoose.model("GuruData", gSchema);