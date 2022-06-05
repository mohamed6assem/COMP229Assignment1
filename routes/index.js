var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    userName: 'Mohamed Assem'  });
});

/* GET About page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me', userName: 'Mohamed Assem' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', userName: 'Mohamed Assem' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', userName: 'Mohamed Assem' });
});
/* GET Contact page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me', userName: 'Mohamed Assem' });
});
module.exports = router;
