const fs=require("fs");
const express= require("express");
const app= express();
const path = require('path');
var cors = require('cors')

app.use(cors());

ac

//fs.copyFileSync("gita.txt","file.txt");
var val="yjvj"; 
      
fs.readFile("./gita.txt","utf8",function(error,data){
   // console.log(data);
    val=data;
});   
//console.log(val);
app.get ("/",(req,res)=>{
    res.send("chant and be happy");
});

app.get("/files",(req,res)=>{
    const text=[
        {id:1, name:"chant and happy"}
    ];
    //console.log();
    res.send(val);
});                      
                         
app.get("/files/:id",function(req,res){
    const filePath = path.join(__dirname,"./"+req.params.id+".txt" );
    let val2="";
    
      
    fs.readFile(filePath,"utf8",function(error,data){
        // console.log(data);
         val2=data;   
         res.send(val2);  
         
     });                 
                         
     //console.log(fet);          
         
                         
                         
});                      
//console.log(val);        
const port=5000;         
                         
app.listen(process.env.PORT || port,()=>{console.log("started server");});