import express from 'express';
import { assignMultipleStudentsToMentor, createMentor, getMentors, getStudentsByMentor } from '../Controllers/Mentors.controller.js';
import { assignMentorToStudent } from '../Controllers/Students.controller.js';

const router=express.Router();

router.post("/createMentor", createMentor);
router.put("/addMentees/:id", assignMultipleStudentsToMentor);
router.get("/getmentees/:id", getStudentsByMentor);
router.get("/getmentors", getMentors);

export default router;