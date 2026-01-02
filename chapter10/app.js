//core module
const path = require("path");
//external module
const express = require("express");
const rootDir = require("./utils/PathUtils");
const app = express();
app.set("view engine", "ejs"); //setting ejs as the templating engine
//local module
app.set("views", "views"); //setting the views directory
const { hostRouter } = require("./routes/hostRouter");
const userRouter = require("./routes/userRouter");
const errorControl = ({ pageNotFound } = require("./controllers/error"));
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(express.urlencoded()); //middleware to parse all incoming requests with urlencoded payloads means data from forms
app.use(userRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use(errorControl.pageNotFound);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
