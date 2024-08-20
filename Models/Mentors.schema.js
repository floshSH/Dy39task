import mongoose from "mongoose";

const mentorSchema=mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
     mentees:[{
         type:mongoose.Schema.Types.ObjectId,
         ref:"students"
     }]
 },{versionKey:false});


const mentors=mongoose.model("mentors",mentorSchema);
export default mentors;



