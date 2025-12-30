//core module
const path = require("path");
//external module
const express = require("express");
const rootDir = require("./utils/PathUtils");
const app = express();
//local module
const hostRouter = require("./routes/hostrouter");
const userRouter = require("./routes/userRouter");
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(express.urlencoded()); //middleware to parse all incoming requests with urlencoded payloads means data from forms
app.use(userRouter);
app.use("/host", hostRouter);
app.use((req, res, next) => {
  // res.send("<h1>Page Not Found</h1>"); //but here the staus code will be 200 OK..which is not correct
  res.status(404).sendFile(path.join(rootDir, "views/404.html")); //so we have to set the status code to 404 implicitly
}); //when user try to access any route which is not defined so this middleware will handle that request
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
