const http = require("http");
const handler = require("../../Practice/handler");

const server = http.createServer(handler);
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
