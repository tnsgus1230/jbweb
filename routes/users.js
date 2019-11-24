const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const config = require("../config/database");

router.post("/register", (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  User.getUserByUsername(newUser.username, (err, user) => {
    if (err) throw err;
    if (user) {
      return res.json({
        success: false,
        msg: "동일한 아이디가 존재합니다. 사용자 등록 실패."
      });
    } else {
      User.addUser(newUser, (err, user) => {
        if (err) {
          res.json({ success: false, msg: "사용자 등록 실패" });
        } else {
          User.addUser(newUser, (err, user) => {
            if (err) {
              res.json({ success: false, msg: "Failed to register user" });
            } else {
              res.json({ success: true, msg: "User" });
            }
          });
        }
      });
    }
  });
});

router.post("/authenticate", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: "User not found" });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = (jwt.sig = jwt.sign({ data: user }, config.secret, {
          expiresIn: 604800 // 1 week
        }));

        res.json({
          success: true,
          token: "JWT " + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: "Wrong password" });
      }
    });
  });
});
//TODO profile 을 쓰는 이유를 잘 모르갯음
//여기서 작업해서 DB 를 가져올수 있게 하는것같긴한대 . . . .
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({
      user: {
        name: req.user.name,
        username: req.user.username,
        email: req.user.email
      }
    });
  }
);

router.post("/validate", (req, res, next) => {
  res.send("검증");
});

module.exports = router;
