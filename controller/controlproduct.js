const path = require('path');
const fs=require('fs');
const Product = require('../model/product');

exports.getaddproduct=(req,res,next)=>{
const products=Product.fetchAll();
    res.sendFile(path.join(__dirname,'..','view','admin.html'));
    }

exports.getcontactus=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','view','contactus.html'));
    }

exports.succes=(req,res)=>{
        res.sendFile(path.join(__dirname,'..','view','succes.html'));
    }

exports.post_addproduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    console.log(product);
    fs.writeFile('message.txt',`${product.title}`,{flag:'a'},(err)=>{
        console.log(err);
    });
    console.log(product);
    res.redirect('/add-product');
}


