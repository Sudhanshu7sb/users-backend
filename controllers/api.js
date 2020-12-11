var express = require("express");
var router = express.Router();
var User = require("../model/User");
var auth = require("../middlewares/auth");


//register user
exports.signup = async (req, res, next) => {
  console.log("in");
    try {
      var user = await User.create(req.body.user, user);
      var token = await auth.generateToken(user);
      console.log(token);
      res.status(201).json({
        email: user.email,
        id: user.id,
        username: user.username,
      });
    } catch (error) {
      next(error);
    }
  };
  
  //user login
  exports.login = async (req, res, next) => {
    var { email, password } = req.body.user;
    if (!email || !password) {
      res.json("Email/Password is required");
    }
    try {
      var user = await User.findOne({ email });
      if (!user) {
        res.json("Email is Invalid");
      }
      if (!user.verify(password)) {
        res.json("password is invalid");
      }
      var token = await auth.generateToken(user);
      res.json({
        email: user.email,
        id: user.id,
        username: user.username,
        token,
      });
    } catch (error) {
      next(error);
    }
  };
  
  // get all user
  
  exports.allUser = async (req, res, next) => {
      
    try {
      var user = await User.find({});
      res.json({ user });
    } catch (error) {
      next(error);
    }
  };
  // get current user
  
  exports.currentUser = async (req, res, next) => {
      console.log(req.body.user._id,"we are user");
      
    try {
      var user = await User.findById(req.params.id, "-password ");
      res.json({ user });
    } catch (error) {
      next(error);
    }
  };