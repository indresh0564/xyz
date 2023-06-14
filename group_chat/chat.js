const express=require('express');
const router = express.Router();

router.get('/login_user',(req,res,next)=>{
res.send('<h1>login_user</h1><form onsubmit="localStorage.setItem(`username`, user.value)" action="/login_user" method="POST"><input type="text" name="user" id="user"><button type="submit">Login</button></form>');
});

router.post('/login_user',(req,res,next)=>{
res.redirect("/chat");
});

module.exports=router;
