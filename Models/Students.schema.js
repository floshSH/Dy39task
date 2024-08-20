import mongoose from "mongoose";


const studentSchema=mongoose.Schema({
    first_name:String,
    last_email:String,
    email:String,
    mentor:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"mentors"
        }]
    ,
    ex_mentor:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"mentors"
        }]
    
},{versionKey:false});

const students= mongoose.model("students",studentSchema);
export default students;