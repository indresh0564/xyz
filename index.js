const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app=express();

const adminroutes = require('./routes1/admin.js');
const shoproutes = require('./routes1/shop.js');

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));

app.use(adminroutes);
app.use(shoproutes);
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,'view','404_page.html'));
});
app.listen(3000);