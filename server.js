///////////////////////////////////////////////////INITIALIZE VARIABLES
var express = require('express')
const url = require('url');
var app = express()
var $ = require('jquery');
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server, { wsEngine: 'ws' });
var port = process.env.PORT || 3000;
///////////////////////////////////////////////////INITIALIZE VARIABLES


///////////////////////////////////////////////////PAGE RENDERING
app.use(express.static(__dirname + '/Views'));

server.listen(3000, function listening() {
  console.log('Listening on %d', server.address().port);
});

app.get('/', function (req, res) {
  res.sendFile('index.html');
})
//////////////////////////////////////////////////PAGE RENDERING
