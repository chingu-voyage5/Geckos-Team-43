// this as auth, handles logging in, pw stuff etc
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");

//encryption for password
const bcrypt = require("bcryptjs");
//Load user model
const User = require("../../models/User");

const jwt = require("jsonwebtoken");

const passport = require("passport");

//validation
const validateUserRegisterInput = require("../../validation/register");
const validateUserLoginInput = require("../../validation/login");

//below refers to /api/users/test

//@route  GET api/users/test
//@desc   Tests users route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

/* @route  GET api/users/register
   @desc   Register a User
   @access Public  
*/

router.post("/register", (req, res) => {
  const { errors, isValid } = validateUserRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json({ errors });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm" //default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          } else {
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          }
        });
      });
    }
  });
});

/* @route  GET api/users/login
   @desc   Login a User / returning JWT
   @access Public  
*/

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const { errors, isValid } = validateUserLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //Find user by email
  User.findOne({
    email
  }).then(user => {
    //check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json({ errors });
    }
    //Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //pw/user is a match

        // create JWT payload
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          date: user.date
        };
        //sign token
        jwt.sign(
          payload,
          process.env.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            //issue a token here
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

//@route  GET api/users/current
//@desc   return current user
//@access Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      date: req.user.date,
      avatar: req.user.avatar
    });
  }
);

module.exports = router;
