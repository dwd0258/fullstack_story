var express = require('express');
var router = express.Router();
var path = require('path') //경로설정

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next){
  res.sendFile(path.join(__dirname, '../views/test.html'))
})

module.exports = router;
