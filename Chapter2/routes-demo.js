const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Own Server</title></head>");
    res.write("<body><h1>Welcome to Home</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/product") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Own Server</title></head>");
    res.write("<body><h1>Checkout our Products</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Own Server</title></head>");
    res.write(
      "<body><h1>My name is Hifza Sethi</h1><p>I am learning Backend</p></body>"
    );
    res.write("</html>");
    res.end();
  }
});
const PORT = 3001;
server.listen(PORT, () => {
  //when server start listening we can know about
  console.log(`Server is running at http://localhost:${PORT}`);
});
