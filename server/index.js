"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var express_1 = require("express");
var cors_1 = require("cors");
var admin_1 = require("./routes/admin");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/admin", admin_1.default);
app.use("/admin", admin_1.default);
app.listen(3000, function () { return console.log("Server is listening on port 3000"); });
