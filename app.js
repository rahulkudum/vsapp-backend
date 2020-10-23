const fs=require("fs");
const express= require("express");
const app= express();
const path = require('path');
var cors = require('cors')

app.use(cors());



//fs.copyFileSync("gita.txt","file.txt";
let val; 
      
fs.readFile("./SB1.txt","utf8",function(error,data){
  let sname=0;
  let ntext="";
  while(sname!==-1){
  
  sname=data.indexOf("Song",sname+5);
  let tsname=data.indexOf("TEXT",sname+5);   
 let ename=data.indexOf("Song",sname+5);
 
 let vtext=data.slice(sname,ename);
 ntext = ntext.concat("\n"+data.slice(sname,tsname));
let tname=0;
while(tname!==-1){
   
    tname=vtext.indexOf("TEXT",tname+5);
    tename=vtext.indexOf("TEXT",tname+5)!==-1 ? vtext.indexOf("Text",tname+5) : ename;
    let dtext=vtext.slice(tname,tename).split(/\r\n|\n/);
    
    let left=false;
  let right=false;
  for(let i in dtext){
      
      if(left){
          if(dtext[i]!=="" && dtext[i]!==" ") right=true;
      } 
      if(dtext[i].indexOf(";")!==-1) left=true;
      if(dtext[i]!=="" && dtext[i]!==" ") ntext=ntext.concat("\n"+dtext[i]);
      if(left && right) break;
      


  }  

}

console.log(ntext);

 
  
  }  
  
  fs.writeFile("./SB1.txt",ntext, function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });
   
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