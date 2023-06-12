const express = require('express');
const bodyparser = require('body-parser');
const chatroutes = require('./group_chat/chat');
const adminroutes = require('./group_chat/admin');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(chatroutes);
app.use(adminroutes);

app.use((req,res,next)=>{
res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(3000);