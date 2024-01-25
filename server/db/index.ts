const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const adminSchema = new mongoose.Schema({
    usename: String,
    password: String
})

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

export const USERS = mongoose.model('User', userSchema);
export const ADMINS = mongoose.model("Admin", adminSchema )
export const COURSES = mongoose.model('Todo', courseSchema);

