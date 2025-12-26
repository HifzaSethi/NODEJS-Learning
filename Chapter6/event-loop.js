console.log("1.Start of script"); //not a callback run immediately
Promise.resolve().then(() => console.log("2.Microtask 1")); //this will run after synchronous code but before timer and I/O
//settime
setTimeout(() => {
  console.log("3.timer 1"), 0; //print after synchronous code and microtask1 but before setImmediate(I/O)
});
//I/O queue
const fs = require("fs");
fs.readFile("user.txt", () => console.log("4.I/O operation complete")); //asynchronous reading operation(I/O) callback
//check queue
setImmediate(() => console.log("5.Immediate 1")); //it run after I/O callback
//close queue
process.on("exit", (code) => {
  //when node.js is about to exit
  console.log("6.Exit Event");
  console.log(code);
});
console.log("7.end of script"); //simple console run immediately
