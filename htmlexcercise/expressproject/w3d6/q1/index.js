const express=require('express');
const path=require('path');
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));
app.use('/css',express.static(path.join(__dirname,'css')));

const getHour=function(){
    const date= new Date();
    return date.getHours();
}
app.get('/',(req,res)=>{
    const date=new Date();
    res.render("index",{
        cssPath:date.getHours()>6 && date.getHours()<18?"day.css":"night.css",
        time:date.toTimeString(),
    });
});
app.listen(3000);