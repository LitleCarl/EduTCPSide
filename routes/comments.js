var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var io = process.io;
  if (io) {
    console.log('emit NewComment')
    io.emit('NewComment', req.query['clazz_id'])
  }
  res.send('respond with a resource');
});

module.exports = router;
