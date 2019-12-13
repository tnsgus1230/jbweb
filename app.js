const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const users = require("./routes/users");
const addbor = require("./routes/addbor");
const payments = require("./routes/payments");
const config = require("./config/database");

const app = express();


const port = process.env.PORT || 3000;

mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to Database " + config.database);
});
mongoose.connection.on("error", err => {
  console.log("Database error: " + err);
});

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));


app.use(bodyparser.json());

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);
app.use("/addbor", addbor);
app.use("/payments", payments);


// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => {
  console.log(`server started on port ${port}!`);
});
