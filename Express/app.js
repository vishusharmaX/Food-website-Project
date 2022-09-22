const express =require("express");
const path =require("path");
const port=80;
const app=express();
const fs=require("fs");
const mongoose = require('mongoose');
const bodyParser =require('body-parser');

// for serving static files
app.use(express.urlencoded())

// set the template engine as pug
app.set('view engine', 'pug')

//endpoints
app.get('/',(req,res)=>{
    // const con="This is the best content on the internet so far  so use it wireless."
    const params ={'title':'Gshif-Contact Us'}
    res.status(200).render('contact.pug',params);

})

// set the template engine as pug
app.post('/',(req,res)=>{
    console.log(req.body)
    // name = req.body.name
    // gender= req.body.gender  
    // email=req.body.email
    // address= req.body.address
    // About= req.body.About
    // let outputTowrite =`The name of the clinet is ${name},${age} year old ,${gender},residing at ${address}.More about him/her: ${more} `
    // fs.writeFileSync('output.txt', outputTowrite)
    const params ={'message':'Your Form has been submitted sucessfully'}
    res.status(200).render('contact.pug',params);


})
app.listen(port,()=>{
    console.log(`This application started sucessfully on port ${port}`)
})
