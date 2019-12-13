const express = require("express"); //const는 상수선언
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const app = express();
const users = require("./routes/users");
const addbor = require("./routes/addbor")
const config = require("./config/database");

mongoose.connect(config.database, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log("connect to " + config.database);
});

//  포트 번호
const port = process.env.PORT || 3000;

//cors 미들웨어
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//bodyparser middleware
app.use(bodyparser.json());
//패스포트 미들웨어 선언
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);
app.use("/addbor", addbor);
app.use("/payments", payments);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//시작 서버
app.listen(port, function () {
  console.log("server started on port" + port);
});
//nodemon 은 코드를 수정할시에 서버 재시작
