"use strict";
/* eslint-disable no-undef */
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJwt = exports.SECRET = void 0;
var jwt = require("jsonwebtoken");
exports.SECRET = 'SecRt';
var authenticateJwt = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (authHeader) {
        var token = authHeader.split(' ')[1];
        jwt.verify(token, exports.SECRET, function (err, payload) {
            if (err) {
                return res.sendStatus(403);
            }
            if (!payload) {
                return res.sendStatus(403);
            }
            if (typeof payload == "string") {
                return res.sendStatus(403);
            }
            req.headers["userId"] = payload.id;
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
exports.authenticateJwt = authenticateJwt;
