const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const config = require("../config/database");
const forge = require('node-forge');
const fs = require('fs');
const pki = forge.pki;
const caCertPem = fs.readFileSync('caCert.pem', 'utf8');
const caPrivateKeyPem = fs.readFileSync('caPrivateKey.pem', 'utf8');
const caCert = pki.certificateFromPem(caCertPem);
const caPrivateKey = pki.privateKeyFromPem(caPrivateKeyPem);

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

router.post('/cert', (req, res, next) => {
  let cert = pki.createCertificate();
  cert.publicKey = pki.publicKeyFromPem(req.body.publicKey);
  cert.serialNumber = '01';
  cert.validity.notBefore = new Date();
  cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);
  var userAttrs = [{
    shortName: 'CN',
    value: req.body.common
  }, {
    shortName: 'C',
    value: req.body.country
  }, {
    shortName: 'ST',
    value: req.body.state
  }, {
    shortName: 'L',
    value: req.body.locality
  }, {
    shortName: 'O',
    value: req.body.organization
  }, {
    shortName: 'OU',
    value: req.body.orgUnit
  }];
  cert.setSubject(userAttrs);

  var caAttrs = [{
    shortName: 'CN',
    value: caCert.subject.getField('CN').value
  }, {
    shortName: 'C',
    value: caCert.subject.getField('C').value
  }, {
    shortName: 'ST',
    value: caCert.subject.getField('ST').value
  }, {
    shortName: 'L',
    value: caCert.subject.getField('L').value
  }, {
    shortName: 'O',
    value: caCert.subject.getField('O').value
  }, {
    shortName: 'OU',
    value: caCert.subject.getField('OU').value
  }];
  cert.setIssuer(caAttrs);
  cert.setExtensions([{
    name: 'basicConstraints',
    cA: true
  }, {
    name: 'keyUsage',
    keyCertSign: true,
    digitalSignature: true,
    nonRepudiation: true,
    keyEncipherment: true,
    dataEncipherment: true
  }, {
    name: 'extKeyUsage',
    serverAuth: true,
    clientAuth: true,
    codeSigning: true,
    emailProtection: true,
    timeStamping: true
  }, {
    name: 'nsCertType',
    client: true,
    server: true,
    email: true,
    objsign: true,
    sslCA: true,
    emailCA: true,
    objCA: true
  }, {
    name: 'subjectAltName',
    altNames: [{
      type: 6, // URI
      value: 'http://example.org/'
    }, {
      type: 7, // IP
      ip: '127.0.0.1'
    }]
  }, {
    name: 'subjectKeyIdentifier'
  }]);
  cert.sign(caPrivateKey);
  return res.json({
    success: true,
    cert: pki.certificateToPem(cert),
    caCert: caCertPem
  });
});

// AuthenticateSig 전자서명 간편 로그인  
router.post('/authenticateSig', (req, res, next) => {
  const username = req.body.username;
  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: "User not found! 등록된 사용자가 없습니다..." });
    }
    const currentTime = req.body.currentTime;
    const signatureHex = req.body.signatureHex;
    const certPem = req.body.certPem;
    const cert = pki.certificateFromPem(certPem);
    const publicKey = cert.publicKey;
    const signature = forge.util.hexToBytes(signatureHex);
    const common = cert.subject.getField('CN').value;
    const currentTime1 = new Date().getTime();
    const diffTime = currentTime1 - currentTime;
    let md = forge.md.sha1.create();
    md.update(username, 'utf8');
    md.update(currentTime, 'utf8');
    let verified1 = publicKey.verify(md.digest().bytes(), signature);
    let verified2 = caCert.verify(cert);
    let verified3;
    if (diffTime < 1000000) verified3 = true;
    let verified4;
    if (username == common) verified4 = true;
    if (verified1 == true && verified2 == true && verified3 == true && verified4 == true) {
      const ptoken = 'JWT ' + jwt.sign({ data: user }, config.secret, {
        expiresIn: 604800 // 1 week, 유효기간: 1주일 
      });
      const stoken = 'JWT ' + jwt.sign({ data: ptoken }, config.secret, {
        noTimestamp: true // 발급시점, 유효기간 삭제. 토큰의 유효성은 ptoken에서만 검증 예정
      });
      res.json({
        success: true,
        ptoken: ptoken,
        stoken: stoken,
        userNoPW: {
          name: user.name,
          username: user.username,
          email: user.email
        }
      });
    } else {
      return res.json({
        success: false,
        msg: 'Login not successful. Something wrong... '
      });
    }
  });
});

module.exports = router;
