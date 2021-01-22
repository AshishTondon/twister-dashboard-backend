"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
var JWT_SECRETCODE = process.env.JWT_SECRETCODE;
var Authenticate = function (req, res, next) {
    var token = "";
    var failredult = {
        isLogin: false
    };
    if (req.headers.hasOwnProperty("authorization")) {
        token = req.headers.authorization.substring(7, req.headers.authorization.length);
    }
    jwt.verify(token, JWT_SECRETCODE, function (err) {
        if (err === null) {
            next();
        }
        else {
            res.status(400);
            res.send(failredult);
        }
    });
};
exports.default = Authenticate;
