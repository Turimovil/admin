var express = require('express');
var app = express();

//Configuration
app.set('view engine', 'jade');
app.set('views', './views')
app.use(express.static('public'));

var router = require('./app/routes');

app.get('/', function (req, res) {
    console.log('hola');
    res.render('index/index', {test: 'test'});
});


app.listen(8080);