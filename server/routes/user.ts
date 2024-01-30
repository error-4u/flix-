/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import  { Request as ExpressRequest, Response } from 'express';
import cors = require('cors');
import mongoose from 'mongoose';
import { USERS, COURSES, ADMINS } from "../db";

import { SECRET } from "../middleware/auth";
import { authenticateJwt } from "../middleware/auth";

const router = express.Router();


interface RequestWithUser extends ExpressRequest {
  user: {
    username: string;
    role: string;
  };
}


router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await USERS.findOne({username}).exec();
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new USERS({ username, password });
     
      newUser.save();
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
      console.log("user signed up")
    }
  
} 
catch (error){
      console.error("error while user signup",error)
}
});
  
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await USERS.findOne({username, password}).exec();
    if (user) {
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
      console.log("user loggedIn")
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
router.get('/courses', authenticateJwt,  async (req, res) => {
  const courses = await COURSES.find({published: true});
    res.json({ courses });
  });
  
router.post('/courses/:courseId', authenticateJwt, async (req:RequestWithUser, res: Response) => {
    const course = await COURSES.findById(req.params.courseId);
    console.log(course)
    if (course) {
      const user = await USERS.findOne((u: { username: string; }) => u.username === req.user.username);
      if (user) {
        user.purchasedCourses.push(course);
        await user.save();
        res.json({ message: 'Course purchased successfully' });

      } else {
        res.status(403).json({ message: 'User not found' });
      }
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });
  
router.get('/purchasedCourses', authenticateJwt, async (req: RequestWithUser, res) => {
    const user = await USERS.findOne((u: { username: string; }) => u.username === req.user.username);
    if (user) {
      res.json({ purchasedCourses: user.purchasedCourses || [] });
    } else {
      res.status(403).json({ message: 'User not found' });
    }
  });
  
export default router;