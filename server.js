const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const pty = require('node-pty');

const terminal = pty.spawn('node', [], {
  name: 'xterm-color',
  cols: 80,
  rows: 80,
  cwd: process.env.HOME,
  env: process.env
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('data', (data) => {
    terminal.write(data);
  });

  terminal.on('data', (data) => {
    socket.emit('data', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(express.static('public'));

app.use('/xterm', express.static(__dirname + '/node_modules/xterm'));

http.listen(3000, () => {
  console.log('listening on *:3000');
});
