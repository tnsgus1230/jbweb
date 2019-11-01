const express = require("express");
const router = express.Router();

const Board = require("../models/board");
const config = require("../config/database");

router.post("/addborcontext", (req, res, next) => {
  let newBoard = new Board({
    number: req.body.number,
    title: req.body.title,
    writer: req.body.writer,
    date: req.body.date,
    views: req.body.views,
    context: req.body.context
  });
  Board.addbor(newBoard, (err, Board) => {
    if (err) {
      res.json({ success: false, msg: "게시물등록이 실패 " });
    } else {
      res.json({ success: true, msg: "게시물등록성공 " });
    }
  });
});
//여기서 바로 콜백으로 받으면 안되는것도 이해가 잘안되고
/*router.get("/board", (req, res, next) => {
  res.json({
    user: {
      number: req.user.number,
      title: req.user.title,
      writer: req.user.writer,
      date: req.user.date,
      views: req.user.views,
      context: req.user.context
    }
  });
});*/
module.exports = router;
