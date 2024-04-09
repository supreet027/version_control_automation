/* eslint-disable object-curly-spacing */
/* eslint-disable new-cap */
/* eslint-disable no-var */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
