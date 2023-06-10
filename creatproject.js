const http = require('http');
const fs = require('fs');
 const body=[];
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method = req.method;
    if(url==='/'){
        fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
        console.log('data from file'+data);
        res.write('<html>');
        res.write('<head><title>enter massage</title></head>');
        res.write(`<body>${data}</body>`);
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end(); 
        });
       
    }
    else if(url === '/message' && method === 'POST'){  
       
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
       return req.on('end',()=>{
           const parsbody = Buffer.concat(body).toString();
           console.log(parsbody);
           const message=parsbody.split('=')[1];
        fs.writeFileSync('message.txt', message);
       res.statusCode=302;
     res.setHeader('Location','/');
     return res.end();
    }); 
    }
});
server.listen(3000);