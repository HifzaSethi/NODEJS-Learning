const path = require("path");
const contactusRouter = require("./routes/contactus");
const rootDir = require("./utils/PathUtils");
const homeRouter = require("./routes/homeRouter");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded());
app.use(homeRouter);
app.use(contactusRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views/404.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
