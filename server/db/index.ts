/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { readFileSync } from 'fs';

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Read data from file, or initialize to empty array if file does not exist
try {
    ADMINS = JSON.parse(readFileSync('admins.json', 'utf8'));
    USERS = JSON.parse(readFileSync('users.json', 'utf8'));
    COURSES = JSON.parse(readFileSync('courses.json', 'utf8'));
} catch {
    ADMINS = [];
    USERS = [];
    COURSES = [];
}

export default {
    ADMINS,
    USERS,
    COURSES
}