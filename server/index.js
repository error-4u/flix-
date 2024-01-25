"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var express = require("express");
var cors = require("cors");
var mongoose_1 = require("mongoose");
var admin_1 = require("./routes/admin");
var user_1 = require("./routes/user");
var app = express();
app.use(cors());
app.use(express.json());
app.use("/admin", admin_1.default);
app.use("/user", user_1.default);
mongoose_1.default.connect("mongodb+srv://vishal:LXqSJK2wRfTsSjga@cluster0.wa3uqwh.mongodb.net/", { dbName: "flix" });
app.listen(3000, function () { return console.log("Server is listening on port 3000"); });
