const http = require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>enter massage</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">send</button></form></body>');
        res.write('</html>');
       return res.end(); 
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>enter the home page</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);