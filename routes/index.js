var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.render('login',{username:"Rohith",password:"actyv"})
});
router.get('/auth/login', function(req, res, next) {
  
  res.render('login',{username:"Rohith",password:"actyv"})
});
module.exports = router;
