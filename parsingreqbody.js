const http = require('http');
const fs = require('fs');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method = req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>enter massage</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
       return res.end(); 
    }
     if(url === '/message' && method === 'POST'){
      const body = [];
       req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
       });
       req.on('end',()=>{
        const parsedbody=Buffer.concat(body).toString();
        console.log(parsedbody);
        const message = parsedbody.split('=')[1];
        fs.writeFileSync('message.txt', message);
       });
    //    fs.writeFileSync('message.txt', 'DUMMY');
       res.statusCode=302;
       res.setHeader('Location','/');
       return res.end();
     }
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>my first page</title></head>');
    // res.write('<body><h1>enter the home page</h1></body>');
    // res.write('</html>');
    // res.end();
});
server.listen(3000);