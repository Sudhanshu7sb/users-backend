var express = require('express');
var router = express.Router();
var User = require("../model/User");
var auth = require("../middlewares/auth");
var api= require('../controllers/api');

// user signup
router.post("/signup", api.signup);

// user login
router.post("/login", api.login);

// list of all users in database
router.get("/listofusers", api.allUser);

//current user informationds
router.get("/user/:id", api.currentUser);

module.exports = router;