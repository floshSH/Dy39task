import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './DataBase/DbConfig.js';
import studentRotes from './Routers/Students.router.js';
import mentorRoutes from './Routers/Mentors.router.js';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.status(200).send("App is Running fine");
});

app.use("/stu",studentRotes);
app.use("/ment", mentorRoutes);
connectDb();

app.listen(process.env.port, ()=>{
    console.log(`Server is running on port ${process.env.port}`);
});
