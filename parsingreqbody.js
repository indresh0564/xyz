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
    //ddd
     if(url === '/message' && method === 'POST'){  
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
       req.on('end',()=>{
           const parsbody = Buffer.concat(body).toString();
           console.log(parsbody);
           const message=parsbody.split('=')[1];
               fs.writeFileSync('message.txt', message);
       });
    //sss
    //dgd
    //sdfsdf
       res.statusCode=302;
     res.setHeader('Location','/');
     return res.end();
     }
});
server.listen(3000);