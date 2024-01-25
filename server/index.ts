/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express = require('express');


import cors = require("cors");
import mongoose from 'mongoose';

import adminRouter from "./routes/admin";
import userRouter from "./routes/user";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

mongoose.connect("mongodb+srv://vishal:LXqSJK2wRfTsSjga@cluster0.wa3uqwh.mongodb.net/", {dbName: "flix"})

app.listen(3000 ,() => console.log("Server is listening on port 3000")) 