const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("<h1>I Am To Learn Full Web Development From Pw Skills!</h1>");
    }
    res.end();
});

server.listen(5000);
console.log(`The HTTP Server IS RUNNING ON PORT`);