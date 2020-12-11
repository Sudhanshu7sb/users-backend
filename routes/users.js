var express = require('express');
var router = express.Router();
var User = require("../model/User");
var auth = require("../middlewares/auth");
var api= require('../controllers/api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('list of users');
  next();
});

router.get("/signup", function(req,res,next) {
  res.send("user signed up");
});



// router.post("/signup", api.signup);
// router.post("/login", api.login);

module.exports = router;
