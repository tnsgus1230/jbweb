const express = require("express");
const router = express.Router();

const Board = require("../models/board");
const config = require("../config/database");

router.post("/addborcontext", (req, res, next) => {
  let newBoard = new Board({
    number: req.body.number,
    title: req.body.title,
    writer: req.body.writer,
    $date: { date: new Date() },
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
/*
router.get("/board", function(req, res) {
  res.json({
    addbor: {
      number: req.addbors.number,
      title: req.boards.title,
      writer: req.addbor.writer,
      date: req.addbor.date,
      views: req.addbor.views,
      context: req.addbor.context
    }
  });
});
*/

router.get("/board", function(req, res) {
  Board.find(function(err, boards) {
    if (err) return res.status(500).send({ error: "database failure" });
    console.log(boards);
    res.json(boards);
  });
});

module.exports = router;
