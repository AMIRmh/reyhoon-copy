var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/src/main.html'));
});

router.get('/posters/:logo', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/posters/' + req.params.logo));
});

module.exports = router;
