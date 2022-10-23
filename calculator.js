const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req, res){
    var num1 = Number(req.body.txt1);
    var num2 = Number(req.body.txt2);
    var results = num1 + num2;
    res.send("The results is "+results);
});

app.listen(3000,function(){
    console.log("Listening to port 3000....");
});