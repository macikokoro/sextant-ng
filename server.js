'use strict';
var http = require('http');
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGO_URL || 'mongodb://localhost/sextant');

var app = express();
app.use(express.static(__dirname + '/build'));
app.use(bodyparser.json());

require('./routes/express-routes')(app);

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'),function(){
  console.log('Server has started on ' + app.get('port'));
});