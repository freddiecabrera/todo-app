'use strict';

const PORT = 3000;
const todosFile = './todos.json';

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');

var app = express();

var server = http.createServer(app);
server.listen(PORT, function() {
  console.log('Serving on port 3000 cuz');
});

//Static files
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
