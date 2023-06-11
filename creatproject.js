const http = require('http');
const express = require('express');
const bodyparser=require('body-parser');
const creatproject=express();
creatproject.use(bodyparser.urlencoded({extended:false}))

creatproject.use('/add-product',(req,res,next)=>{
    res.send('<form action ="/product" method="POST"><input type="text"  name="title"><button type ="submite">add product</button></form>');
});
creatproject.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});
creatproject.use('/',(req,res,next)=>{
    res.send('<h1>Welcome Express.js</h1>');
});
creatproject.listen(3000);
//...