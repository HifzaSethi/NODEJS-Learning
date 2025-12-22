const http = require('http');
const array = ['Home', 'Men', 'Women', 'Kids', 'Cart'];

const server = http.createServer((req, res) => {
console.log(req.url,req.method);
for(let j=0;j<array.length;j++){
if(req.url===`/${array[j]}`){
  res.write(`<h1>Welcome to ${array[j]}</h1>
        <a href='/'>Go Back</a>`)
  return res.end();
}}
res.setHeader('Content-Type', 'text/html');
  // Create HTML list items from array
  let listItems = '';
for (let i = 0; i < array.length; i++) {
  listItems += `<li><a href='/${array[i]}'>${array[i]}</a></li>`;
}


  // Write the full HTML
  res.write('<html>');
  res.write('<head><title>Navigation Bar</title></head>');
  res.write(`<body>
    <h1>List</h1>
    <ul>${listItems}</ul>

    </body>`);
  res.write('</html>');
  res.end();
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
