const { json } = require('express');
const fs = require('fs');
const path = require('path');
// const process=require('Process');

module.exports=class Product{

constructor(t){
        this.title=t;
    }

save(){
const p = path.join(path.dirname(process.mainModule.filename),'data','products.JSON');
fs.readFile(p,(err,file_content)=>{
    let products=[];
    if(!err)
    {
       products=JSON.parse(file_content);
    }
    products.push(this);
    fs.writeFile(p,JSON.stringify(products),(err)=>{
        console.log(err);
    });
});
}

static fetchAll()
{
    const p = path.join(path.dirname(process.mainModule.filename),'data','products.JSON');
    fs.readFile(p,(err,file_content)=>{
        if(err){
            return [];
        }
        return JSON.parse(file_content);
    });
}

}