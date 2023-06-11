const express = require('express');
const bodyparser = require('body-parser');
const app=express();

const adminroutes = require('./routes1/admin.js');
const shoproutes = require('./routes1/shop.js');

app.use(bodyparser.urlencoded({extended:false}))
app.use('/admin',adminroutes);
app.use(shoproutes);
app.use((req,res,next)=>{
res.status(404).send('<h1>Page not found</h1>');
});
app.listen(3000);