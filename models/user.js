const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");
const forge = require("node-forge");
var salt;
var numIterations = 1000;

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const User1 = mongoose.model("User", UserSchema);

User1.getUserById = function (id, callback) {
  User1.findById(id, callback);
};

User1.getUserByUsername = function (username, callback) {
  const query = { username: username };
  User1.findOne(query, callback);
};

User1.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

User1.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
module.exports = User1;
