const http = require("http");
let port = 9000;

const server = http.createServer((req, res) => {
  res.end("Hello, world!");
});

server.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
