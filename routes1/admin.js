const { log } = require('console');
const express=require('express');
const path = require('path');

const router=express.Router();

    router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','view','admin.html'));
    });

    router.get('/contact_us',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','view','contactus.html'));
    });

    router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/add-product');
    });

module.exports=router;