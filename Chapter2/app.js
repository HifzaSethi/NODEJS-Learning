const http = require("http");
const requirerequest = require("./userparsing"); //.js comes default
const server = http.createServer(requirerequest);
const PORT = 3001;
server.listen(PORT, () => {
  //when server start listening we can know about
  console.log(`Server is running at http://localhost:${PORT}`);
});
//this is the file which will run and use the modulr userparsing
