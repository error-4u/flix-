"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COURSES = exports.ADMINS = exports.USERS = void 0;
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});
var adminSchema = new mongoose.Schema({
    usename: String,
    password: String
});
var courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});
exports.USERS = mongoose.model('User', userSchema);
exports.ADMINS = mongoose.model("Admin", adminSchema);
exports.COURSES = mongoose.model('Todo', courseSchema);
