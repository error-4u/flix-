"use strict";
/* eslint-disable no-undef */
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJwt = exports.SECRET = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
exports.SECRET = 'SecRt';
var authenticateJwt = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (authHeader) {
        var token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, exports.SECRET, function (err, user) {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
exports.authenticateJwt = authenticateJwt;
