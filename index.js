const { createServer } = require('node:http');
const url=require("url")
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    const requrl=req.url
    
    const response = {
         name: "prakash",
         url: requrl,
         date: "george" // Added `date` as part of the JSON response
   };

    const {name:oh}=response

    const array=[1,2, 3]

    const [_, b,c] = array;

    console.log(b); // 1
    console.log(c); // 2
  

    console.log(oh)
    console.log(response)
    console.log(JSON.stringify(response))
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response)); 
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
