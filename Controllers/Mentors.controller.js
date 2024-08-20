import mentors from "../Models/Mentors.schema.js";
import students from "../Models/Students.schema.js";

export const getMentors = async (req, res) => {
  try {
    const allMentors = await mentors.find();
    res.status(200).json(allMentors);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMentor= async (req, res) => {
  const mentor = new mentors(req.body);

  try {
    const newMentor = await mentor.save();
    res.status(201).json(newMentor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




export const assignMultipleStudentsToMentor = async (req, res) => {
  const  mentorId  = req.params.id;
  const { studentIds } = req.body;

  try {
    const mentor = await mentors.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    mentor.mentees.push(...studentIds);
    await mentors.updateOne({_id:mentorId},mentor);
await students.updateMany({_id:{$in:studentIds}},{$push:{mentor:mentorId}})
    res.status(200).json({ message: "Students assigned to mentor successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getStudentsByMentor = async (req, res) => {
  const  mentorId  = req.params.id;

  try {
    const mentor = await mentors.findById(mentorId).populate("mentees");
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






