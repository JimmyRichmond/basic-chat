var express = require('express');
var router = express.Router();

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Basic Chat' });
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

server.listen(8080);

io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  })
});

module.exports = router;
