//Blocking and Async
//this will show which block of code run first..event looping
const fs = require("fs");
console.log("1.start of script");
//synchronuos blocking operation
console.log("2.reading the file synchronously");
const datasync = fs.readFileSync("user.txt", "utf-8");
console.log(datasync);
console.log("3.synchronous reading complete");
//asunchronus (non-blocking) operation
console.log("4.Reading file asynchronously");
fs.readFile("user.txt", "utf-8", (err, dataasync) => {
  if (err) throw err;
  console.log("6.asynchronous reading complete");
});
console.log("5.end of script");
