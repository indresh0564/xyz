const express=require('express');
const fs = require('fs');

const router=express.Router();

router.get('/chat',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
        if(err){
            console.log(err);
            data='data not found';
               }
        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/chat_user"method="POST"><input type="text" id="message" name="message" placeholder="enter massage"><input type="hidden" id="username" name="username"><button type="submit">do_chat</button></form>`);
    });
    });

router.post('/chat_user',(req,res,next)=>{
    fs.writeFile('message.txt', `{${req.body.username}:${req.body.message}}`,{flag:'a'},(err)=>err?console.log(err):console.log(4));
    res.redirect('/chat');
});

module.exports=router;