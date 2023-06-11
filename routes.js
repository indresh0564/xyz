const fs = require('fs');

const reqHandler = (req,res)=>{
         const url=req.url;
         const method = req.method;
if(url==='/'){
    fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log(err);
        }
        //...
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
    const body=[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });
   return req.on('end',()=>{
       const parsbody = Buffer.concat(body).toString();
       console.log(parsbody);
       const message=parsbody.split('=')[1];
    fs.writeFile('message.txt', message,(err)=>{
        if(err){
            console.log(err);
        }
        res.statusCode=302;
       res.setHeader('Location','/');
       return res.end(); 
                                               }); 
                            }); 
                                                    }   
}
//method--1
 module.exports=reqHandler;
// method--2
// module.exports={
//     handler: reqHandler,
//     sometext:'hii we creat proj'
// };
//method--3
//module.exports.handler=reqHandler;
//module.exports.sometext='hello bro we finally creat project';