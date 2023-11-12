/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/admin", adminRouter)


app.listen(3000 ,() => console.log("Server is listening on port 3000")) 
