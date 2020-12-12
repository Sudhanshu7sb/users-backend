var express = require('express');
var router = express.Router();
var User = require("../model/User");
var auth = require("../middlewares/auth");
var api= require('../controllers/api');

router.get('/', function(req, res, next) {
  res.send('list of users');
  next();
});



module.exports = router;
