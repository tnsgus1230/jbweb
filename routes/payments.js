const express = require("express");
const router = express.Router();
const passport = require("passport");

const Paysave = require("../models/payment");
const config = require("../config/database");

router.post("/paysave", (req, res, next) => {
    let newdata = new Paysave({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email
    });

    Paysave.savedata(newdata, (err) => {
        if (err) {
            res.json({ success: false, msg: "결제정보 등록이 실패했습니다." })
        } else {
            res.json({ success: true, msg: "결제 성공" })
        }
    })

})

router.get("/orderdata",
    passport.authenticate("jwt", { session: false }), (req, res, next) => {
        res.json({
            user: {
                name: req.user.name,
                username: req.user.username,
                email: req.user.email
            }
        })
    })

module.exports = router;