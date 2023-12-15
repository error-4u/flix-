/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import jwt from 'jsonwebtoken';
import fs from "fs";
import cors from 'cors';
import mongoose from 'mongoose';
const { USERS, COURSES, ADMINS } = require("../db").default

import { SECRET } from "../middleware/auth";
import { authenticateJwt } from "../middleware/auth";

const router = express.Router();

router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const user = USERS.find(u => u.username === username);
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = { username, password };
      USERS.push(newUser);
      fs.writeFileSync('users.json', JSON.stringify(USERS));
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
  });
  
router.post('/login', (req, res) => {
    const { username, password } = req.headers;
    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
router.get('/courses', authenticateJwt, (req, res) => {
    res.json({ courses: COURSES });
  });
  
router.post('/courses/:courseId', authenticateJwt, (req, res) => {
    const course = COURSES.find(c => c.id === parseInt(req.params.courseId));
    if (course) {
      const user = USERS.find(u => u.username === req.user.username);
      if (user) {
        if (!user.purchasedCourses) {
          user.purchasedCourses = [];
        }
        user.purchasedCourses.push(course);
        fs.writeFileSync('users.json', JSON.stringify(USERS));
        res.json({ message: 'Course purchased successfully' });
      } else {
        res.status(403).json({ message: 'User not found' });
      }
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });
  
router.get('/purchasedCourses', authenticateJwt, (req, res) => {
    const user = USERS.find(u => u.username === req.user.username);
    if (user) {
      res.json({ purchasedCourses: user.purchasedCourses || [] });
    } else {
      res.status(403).json({ message: 'User not found' });
    }
  });
  
export default router