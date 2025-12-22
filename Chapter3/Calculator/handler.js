const sumRequestHandler = require("./sum");
const handler = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write(`<body>
      <title>Calculator</title>
      <h1>Welcome To Calculator</h1>
      <a href='/calculator'>Go to calculator</a>
      </body>`);
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.write(`<html>
      <body>
        <form method="POST" action="/cal-result">
          <label for="num1">First:</label><br>
          <input type="number" id="num1" name="num1" required><br><br>
          <label for="num2">Second:</label><br>
          <input type="number" id="num2" name="num2" required><br><br>
          <button type="submit">Sum</button>
        </form>
      </body></html>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/cal-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  } else {
    // 404 Page
    res.write("<html>");
    res.write(`<body>
    <title>Calculator</title>
    <h1>404 Page does not exist</h1>
    <a href='/'>Go to home</a>
    </body>`);
    res.write("</html>");
    res.end();
  }
};

module.exports = handler;
