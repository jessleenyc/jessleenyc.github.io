var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ejs = require('ejs');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000);



