const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  res.write("<html>");
  res.write(`<body>
    <title>npm</title>
    <h1>This is npm learning</h1>
    </body>`);
  res.write("</html>");
  res.end();
});
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at address  http://localhost:${port}`);
});
