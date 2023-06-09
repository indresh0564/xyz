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
     if(url === '/message' && method === 'POST')
     {
      const body = [];
       req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
       });
       req.on('end',()=>{
        const parsedbody=Buffer.concat(body).toString();
        console.log(parsedbody);
       })
       fs.writeFileSync('message.txt', 'DUMMY');
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
// set response content  
// if(req.url=='/home') 
// {
//     res.write('<html><body><p>Welcome home</p></body></html>');
//     res.end();
// }
// else if(req.url=='/about') 
// {
//     res.write('<html><body><p>Welcome to About Us page.</p></body></html>');
//     res.end();
// }
// else if(req.url=='/node')
// {
//    res.write('<html><body><p>Welcome to my Node Js project.</p></body></html>');
//    res.end(); 
// }
//    console.log(req);
// //    res.end(); 
// });
// server.listen(5000);
// const student={
//     name:'indresh',
//     age:23,
//     // greet:()=>{
//     //     console.log('hii i am'+this.name);
//     // }
//     // greet:function(){
//     //             console.log('hii i am'+this.name);
//     // }
//     greet(){
//                         console.log('hii i am'+this.name);
//     }
// }
// student.greet();
// const arr = ['apple','oranges',' ', 'mango',' ','lemon'];
// const arr2 =arr.map(temp=>{
//     if(temp===' '){
//         return 'empty string';
//     }
//     else
//     {
//         return temp;

//     }
// });
// console.log(arr);
// console.log(arr2);
// const obj1 = {'key1': 1}

// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}
// / console.log(obj1)
// console.log(obj2)
// async function xyz(){
// console.log('a');
// console.log('b');
// function C(){
//     return new Promise((res)=>{
//     setTimeout(() => res('c'), 3000);  
//     });
// }
// ans=await C();
// function D(){
//     return new Promise((res)=>{
//         console.log(ans);
// setTimeout(() => res('d'), 0)
//     });
// }  
// ansd=await D();
// console.log(ansd);
// console.log('e');
// }
// xyz();
