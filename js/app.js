const express =require("express");
const app=express();
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const html = require('html');
const { stringify } = require("querystring");

var Schema = mongoose.Schema;
var url ="mongodb;//localhost:27017//contact";
mongoose.connect(url,{useNewUrlParser:true});

app.set('view engine','html');
app.use(bodyParser.urlencoded({extended:true}));

// create Schema

var mySchmea= new mongoose.Schema({
    name : string,
    gender:  string, 
    email: string, 
    address: string, 
    About: string, 
})

var comments = mongoose.model('Article',mySchmea);

app.get('/',(req,res)=>{
    res.render('contact');
});

app.post('/',(req,res)=>{
    var info ={
        name :req.body.name,
        gender: req.body.gender  ,
        email:req.body.email,
        address: req.body.address,
        About: req.body.About
    };
    var me = new comments (info);
    me.save(function(err){
        if (err){
            console.log('error occured');
        }
        else{
            console.log('Done!');
        }
    });
    res.send('Done!')

});
app.listen(3000,()=>console.log('Listening on 3000'));