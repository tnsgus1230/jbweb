const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const users = require("./routes/users");
const addbor = require("./routes/addbor");
const app = express();
const port = 3000;

const config = require("./config/database");

mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to Database " + config.database);
});
mongoose.connection.on("error", err => {
  console.log("Database error: " + err);
});

app.use(cors());
app.use(bodyparser.json());

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);

app.use(express.static(path.join(__dirname, "Public")));
app.use("/addbor", addbor);

app.get("/", (reg, res) => {
  res.send("<h1> testing</h1><br/><h2>second line</h2>");
});
app.get("/test1", (reg, res) => {
  res.send("<h1> testing1</h1>");
});

app.listen(port, () => {
  console.log(`server started on port ${port}!`);
});
