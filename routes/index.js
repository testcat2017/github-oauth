var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // req.user にユーザー情報が設定されている
  res.render('index', { title: 'Express', user: req.user });
});

module.exports = router;
