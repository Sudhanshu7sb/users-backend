var express = require('express');
var router = express.Router();
var User = require("../model/User");
var auth = require("../middlewares/auth");
var api= require('../controllers/api');


router.post("/signup", api.signup);
router.post("/login", api.login);
router.get("/listofusers", api.allUser);
router.get("/user/:id", api.currentUser);

module.exports = router;