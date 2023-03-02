# Node REPL Web

A simple Node repl running on the browser, based on xterm.js, node-pty and socket.io

## Installation

Install Docker Desktop, once you have installed:

```bash
docker build -t node-repl-web .
```

## Running

```bash
docker run -p 3000:3000 node-repl-web
```

## Live demo

[Here](https://node-repl-web.fly.dev)