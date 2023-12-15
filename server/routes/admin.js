"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var express_1 = require("express");
var jsonwebtoken_1 = require("jsonwebtoken");
var fs_1 = require("fs");
var _a = require("../db").default, ADMINS = _a.ADMINS, USERS = _a.USERS, COURSES = _a.COURSES;
var auth_1 = require("../middleware/auth");
var auth_2 = require("../middleware/auth");
var router = express_1.default.Router();
router.get("/me", auth_2.authenticateJwt, function (req, res) {
    res.json({ username: req.user.username });
    if (!ADMINS) {
        res.status(403).json({ msg: "Admin doesn't exist" });
        return;
    }
});
router.post('/signup', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    var admin = ADMINS.find(function (a) { return a.username === username; });
    console.log("admin signup");
    if (admin) {
        res.status(403).json({ message: 'Admin already exists' });
    }
    else {
        var newAdmin = { username: username, password: password };
        ADMINS.push(newAdmin);
        fs_1.default.writeFileSync('admins.json', JSON.stringify(ADMINS));
        var token = jsonwebtoken_1.default.sign({ username: username, role: 'admin' }, auth_1.SECRET, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token: token });
    }
});
router.post('/login', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    var admin = ADMINS.find(function (a) { return a.username === username && a.password === password; });
    if (admin) {
        var token = jsonwebtoken_1.default.sign({ username: username, role: 'admin' }, auth_1.SECRET, { expiresIn: '1h' });
        res.json({ message: 'Logged in successfully', token: token });
    }
    else {
        res.status(403).json({ message: 'Invalid username or password' });
    }
});
router.post('/courses', auth_2.authenticateJwt, function (req, res) {
    var course = req.body;
    course.id = COURSES.length + 1;
    COURSES.push(course);
    fs_1.default.writeFileSync('courses.json', JSON.stringify(COURSES));
    res.json({ message: 'Course created successfully', courseId: course.id });
});
router.put('/courses/:courseId', auth_2.authenticateJwt, function (req, res) {
    var course = COURSES.find(function (c) { return c.id === parseInt(req.params.courseId); });
    if (course) {
        Object.assign(course, req.body);
        fs_1.default.writeFileSync('courses.json', JSON.stringify(COURSES));
        res.json({ message: 'Course updated successfully' });
    }
    else {
        res.status(404).json({ message: 'Course not found' });
    }
});
router.get('/courses', auth_2.authenticateJwt, function (req, res) {
    res.json({ courses: COURSES });
});
exports.default = router;
