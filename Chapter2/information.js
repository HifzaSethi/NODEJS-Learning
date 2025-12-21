const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Collecting Data</title></head>");
    res.write("<h1>Enter your details</h1>");
    res.write(`
      <form method="POST" action="/submit-info">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>
        <label for="gender">Gender:</label><br>
        <select id="gender" name="gender" required>
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select><br><br>
        <input type="submit" value="Submit">
      </form>`);
    res.write("</body></html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-info" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user.txt", "Hifza Sethi...tooo");
    res.statusCode = 302;
    console.log("📩 POST request received at /submit-info");
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Own Server</title></head>");
  res.write(
    "<body><h1>My name is Hifza Sethi</h1><p>I Love myself very muchh</p></body>"
  );
  res.write("</html>");
  res.end();
});
const PORT = 3001;
server.listen(PORT, () => {
  //when server start listening we can know about
  console.log(`Server is running at http://localhost:${PORT}`);
});
