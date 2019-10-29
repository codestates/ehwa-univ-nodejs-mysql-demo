var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    messages: {
      success: true
    },
    data: [
      {
        name: 'johnny',
        date: '2019-11-01',
        amount: 12000,
        subject: 'lunch',
        type: 'expanse'
      }
    ]
  });
});

module.exports = router;
