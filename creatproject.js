const http = require('http');
const express = require('express');
// const routes = require('./routes');
// const reqHandler = require('./routes');
// console.log(routes.sometext);
const creatproject =express();
//middle ware --1
creatproject.use((req,res,next)=>{
    console.log("I In The Middle Ware");
    next();//allow the request to continue the next middle ware in line 
});
//middle ware --2.
creatproject.use((req,res,next)=>{
    console.log("I In The Another Middle Ware");
    res.send('<h1>Hello Frome Express.js</h1>');
    res.send( { key1: value });
});
// const server=http.createServer(creatproject);
// server.listen(3000);
creatproject.listen(3000);