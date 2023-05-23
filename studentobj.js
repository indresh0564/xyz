const http = require('http');
const server=http.createServer((req,res)=>{
// set response content    
   res.write('<html><body><p>My Name is Indresh Sahu.</p></body></html>');
   console.log(req); 
})  
server.listen(4000);
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
