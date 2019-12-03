const mongoose = require("mongoose");
const config = require("../config/database");

// 게시판 스키마
const BoardSchema = mongoose.Schema({
  number: { type: String, require: true },
  title: { type: String, require: true },
  writer: { type: String, require: true },
  date: { type: String, require: true },
  views: { type: String, require: true },
  context: { type: String, require: true }
});

const Board1 = mongoose.model("Board", BoardSchema);
Board1.getUserById = function(id, callback) {
  Board1.findById(id, callback);
};

Board1.getwriter = function(writer, callback) {
  const query = { writer: writer };
  Board1.findOne(query, callback);
};
Board1.gettext = function(context, callback) {
  const query = { context: context };
  Board1.findOne(query, callback);
};
/*Board1.getUserById = function(id, callback) {
  Board1.findById(id, callback);
};

Board1.getUserByUsername = function(username, call  back) {
  const query = { username: username };
  Board1.findOne(query, callback);
};
*/

Board1.addbor = function(newboard, callback) {
  newboard.save(callback);
};

BoardSchema.pre("update", function() {
  this.update({}, { $set: { updatedAt: new Date() } });
});

module.exports = Board1;
