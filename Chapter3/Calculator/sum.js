const sumRequestHandler = (req, res) => {
  console.log("1.in request");
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("1.data come");
  }); //this is the ftn waiting for chunck of datanwhen data come it execute..async
  req.on("end", () => {
    //it will run when daata end
    console.log("3.data finish");
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const data = Object.fromEntries(params);
    const num1 = Number(data.num1);
    const num2 = Number(data.num2);
    const sum = num1 + num2;
    console.log("4.result");
    res.write("<html>");
    res.write(`<body>
    <title>Calculator</title>
    <h1>Your Sum is ${sum}</h1>
    <a href='/'>Go to home</a>
    </body>`);
    res.write("</html>");

    res.end();
  });
};
module.exports = sumRequestHandler;
