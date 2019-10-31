var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('sample');
  res.render('sample', {
    messages: 'hello express'
  });
});

module.exports = router;
