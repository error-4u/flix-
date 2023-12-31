/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import jwt from 'jsonwebtoken';
import fs from "fs";
import cors from 'cors';
import mongoose from 'mongoose';
const { ADMINS,USERS,COURSES } = require("../db").default

import { SECRET } from "../middleware/auth";
import { authenticateJwt } from "../middleware/auth";

const router = express.Router();



router.get("/me" , authenticateJwt , (req , res) => {
    res.json({username: req.user.username})
    if(!ADMINS){
      res.status(403).json({msg:"Admin doesn't exist"})
      return
    }
  })

router.post('/signup',  (req, res) => {
    const { username, password } = req.body;
    const admin = ADMINS.find(a => a.username === username);
    console.log("admin signup");
    if (admin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      const newAdmin = { username, password };
      ADMINS.push(newAdmin);
      fs.writeFileSync('admins.json', JSON.stringify(ADMINS));
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
     res.json({ message: 'Admin created successfully', token });
  
    }
  });
  
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const admin = ADMINS.find(a => a.username === username && a.password === password);
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

router.post('/courses', authenticateJwt, (req, res) => {
    const course = req.body;
    course.id = COURSES.length + 1;
    COURSES.push(course);
    fs.writeFileSync('courses.json', JSON.stringify(COURSES));
    res.json({ message: 'Course created successfully', courseId: course.id });
  });
  
router.put('/courses/:courseId', authenticateJwt, (req, res) => {
    const course = COURSES.find(c => c.id === parseInt(req.params.courseId));
    if (course) {
      Object.assign(course, req.body);
      fs.writeFileSync('courses.json', JSON.stringify(COURSES));
      res.json({ message: 'Course updated successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });
  
router.get('/courses', authenticateJwt, (req, res) => {
    res.json({ courses: COURSES });
  });


  export default router;