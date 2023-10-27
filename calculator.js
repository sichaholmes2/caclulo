
// jshint esversion:6

const express = require("express");
const bodyParser=require("body-parser");


const app =express();// setting up an app that uses the express module

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  //res.sendFile("index.html");
  // or res.sendFile(__dirname);
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){

 var num1=Number(req.body.n1);
 var num2=Number(req.body.n2);

 var result=num1+num2;



  res.send("The result is "+ result);
});




//you can use any port, but 3000 is the most commonly used prt when people are developing locally
app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
