const fs = require("fs");
const requesthandler = (req, res) => {
  console.log(req.url, req.method);
  const body = [];
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
    req.on("data", (chunk) => {
      //this chunk is the argumnet to callback ftn
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullbody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullbody); //data ko alag alag kr rha
      // const bodyobj={};
      // for(const[key,val]of params.entries()){
      //   bodyobj[key]=val;
      const bodyobj = Object.fromEntries(params);
      console.log(bodyobj);
      console.log(fullbody);

      fs.writeFileSync("myFile.txt", JSON.stringify(bodyobj));
    });

    res.statusCode = 302;
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
};
module.exports = requesthandler;
