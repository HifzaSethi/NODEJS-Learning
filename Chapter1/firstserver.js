const http=require('http')
const server=http.createServer((req,res)=>{
  console.log(req);
  process.exit(); //jese hi request aajai to exit
})
//server.listen(3000); //server is listening for request
const PORT=3005;
server.listen(PORT,()=>{ //when server start listening we can know about
  console.log(`Server is running at http://localhost:${PORT}`); 
})