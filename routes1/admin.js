const express=require('express');
const path = require('path');

const router=express.Router();
const productcontroller=require('../controller/controlproduct')

    router.get('/add-product',productcontroller.getaddproduct);

    router.get('/contact_us',productcontroller.getcontactus);

    router.post('/succes',productcontroller.succes);

    router.post('/post_addproduct',productcontroller.post_addproduct);
    
module.exports=router;