const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
//To read post data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/',require('./routes'));
app.listen(port,(err)=>{
    if(err){
        console.log('Problem in Server Starting');
        return;
    }
    console.log('Server Started');
})