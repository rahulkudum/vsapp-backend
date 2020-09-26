const fs=require("fs");
const express= require("express");
const app= express();

//fs.copyFileSync("gita.txt","file.txt");
var val="yjvj"; 
      
fs.readFile("./gita.txt","utf8",function(error,data){
   // console.log(data);
    val=data;
});   
//console.log(val);
app.get("/files",(req,res)=>{
    const text=[
        {id:1, name:"chant and happy"}
    ];
    //console.log();
    res.send(val);
});                      
                         
app.get("/files/:id",function(req,res){
      
    fs.readFile("./"+req.params.id+".txt","utf8",function(error,data){
        // console.log(data);
         val=data;    
         res.send(val);  
         
     });                 
                         
     //console.log(fet);          
         
                         
                         
});                      
//console.log(val);        
const port=5000;         
                         
app.listen(process.env.PORT || port,()=>{console.log("started server");});