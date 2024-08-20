import express from 'express';
import { assignMentorToStudent, createStudent, getStudents, getStudentsWithoutMentors, previousMentor } from '../Controllers/Students.controller.js';

const router=express.Router();

router.post("/createstudent", createStudent);
router.put("/assignmentor/:id",assignMentorToStudent);
router.get("/getNoMentor", getStudentsWithoutMentors);
router.get("/previousmentor/:id",previousMentor);
router.get("/getStudents", getStudents);

export default router;

