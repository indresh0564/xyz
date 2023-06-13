const express=require('express');
const path = require('path');

const productcontroller=require('../controller/controlproduct')

const router=express.Router();

router.use('/home_page',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'view', 'shop.html'));
});

module.exports=router;