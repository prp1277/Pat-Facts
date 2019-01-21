---
title: "Start A node.js Server"
date: 2018-01-20
---

> [Source](https://www.youtube.com/watch?v=U8XF6AFGqlc)

# Building A Node Server

This builds the node-backend to run a server on port 3000 with a status code of 200.

```jsx
const http = require('http');
const fs = require('fs');

const hostName = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if (err) {
    throw err;
  }

  const Server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
  });

  Server.listen(port, hostName, () => {
    console.log('Server started on port ' + port);
  });

});
```
