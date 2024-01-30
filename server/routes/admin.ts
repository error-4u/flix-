/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import * as express from 'express';
import * as  jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import  { Request as ExpressRequest, Response } from 'express';
import { ADMINS, USERS, COURSES } from "../db/index.js";

import { SECRET } from "../middleware/auth";
import { authenticateJwt } from "../middleware/auth";


const router = express.Router();

interface RequestWithUser extends ExpressRequest {
  user: {
    username: string;
    role: string;
  };
}


router.get("/me" , authenticateJwt ,async  (req:RequestWithUser , res:Response) => {
   const admin = await ADMINS.findOne({username: req.user.username}).exec();
    if(!admin){
      res.status(403).json({msg:"Admin doesn't exist"})
      return
    }
    res.json({username: req.user.username})
  })

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const Existingadmin = await ADMINS.findOne({ username }).exec();
    
    if (Existingadmin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      const newAdmin = new ADMINS({ username, password });
      
      await newAdmin.save()
      console.log("signup");

      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
     res.json({ message: 'Admin created successfully', token });
  
    }
  });
  
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const admin = await ADMINS.findOne({username, password}).exec();
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
      console.log("admin loggedIn")
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

router.post('/courses', authenticateJwt, async (req, res) => {
    const course = new COURSES(req.body);
   await course.save();
    res.json({ message: 'Course created successfully', courseId: course.id });
  });
  
router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
    const courseId = req.params.courseId;
    const course = await COURSES.findByIdAndUpdate(courseId, req.body);
    if (course) {
    
      res.json({ message: 'Course updated successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });

  
  router.get('/courses', authenticateJwt, async (req, res) => {
    try {
      const courses = await COURSES.find({}).exec();
      res.json({ courses });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

  export default router;