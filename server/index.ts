/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import jwt from 'jsonwebtoken';


import cors from 'cors';
import mongoose from 'mongoose';

import adminRouter from "./routes/admin";
import userRouter from "./routes/user";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/admin", adminRouter)


app.listen(3000 ,() => console.log("Server is listening on port 3000")) 
