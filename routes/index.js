var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("C:\\Users\\amh\\WebstormProjects\\IElastProject\\public\\src\\main.html");
  // res.end()
});

module.exports = router;
