import students from "../Models/Students.schema.js";
import mentors from "../Models/Mentors.schema.js";

export const getStudents = async (req, res) => {
  try {
    const student = await students.find();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  const student = new students(req.body);
  // student.ex_mentor="";
  // if(student.mentor==null){
  //   student.mentor='';
  // }

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const assignMentorToStudent = async (req, res) => {
    const studentId  = req.params.id;
    const { mentorId } = req.body;
  
    try {
      const student = await students.findById(studentId);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      const mentor=await mentors.findById(mentorId);
      if(!mentor){
        return res.status(404).json({ message: "Mentor not found" });
      }
        if(student.ex_mentor.length>0){
        student.ex_mentor.forEach((value)=>{
          return value=student.mentor.forEach((ment)=> ment);
          
        })
       } 
       if(student.ex_mentor.length ==0 && student.mentor.length>0){
        student.ex_mentor.push(student.mentor);}
      

      
      console.log("start");
       if(student.mentor.length>0){
        let sdId=student.mentor[0].toString();
       // student.mentor.forEach((id)=> id);
        console.log(sdId);
         const updatementee=await mentors.findById(sdId);
          console.log(updatementee); 
         updatementee.mentees=updatementee.mentees.filter((mentee)=> mentee!==studentId)   
        await mentors.findByIdAndUpdate(sdId, updatementee,{new:true});
        student.mentor=student.mentor.map((value)=>{
          
          return mentorId;
        })
       }

console.log("end");
      // console.log((student.mentor));
       //console.log((mentorId));
       if(student.mentor.length==0){
        student.mentor.push(mentorId);
       };
       
      
       //console.log(ment);
       
      mentor.mentees.push(studentId);
      console.log((mentor.mentees));
       
      const mentUpdate=await mentors.findByIdAndUpdate(mentorId, mentor, {new:true});
       const result=await students.findByIdAndUpdate(studentId,student,{new:true});
      
      console.log(result);
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export const getStudentsWithoutMentors = async (req, res) => {
    try {
      const studentData = await students.find();
       const studentsWithoutMentors= studentData.map((data)=> {if(data.mentor.length==0){return data}})
      res.status(200).json(studentsWithoutMentors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
export const previousMentor=async(req,res)=>{
  const studentId=req.params.id;
  //console.log(studentId);
    try {
      const student=await students.findById(studentId);
     console.log(student.ex_)
      res.status(200).send(student.ex_mentor);
  } catch (error) {
    console.log(error);
  }
}






