var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get Hello world page*/
router.get('/helloworld', function(req, res, next) {
  res.render('hello-world', { title: 'Hola' });
});

module.exports = router;
