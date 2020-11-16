const fs=require("fs");
const express= require("express");
const app= express();
const path = require('path');
var cors = require('cors')

app.use(cors());




 let val; 
      
fs.readFile("./Krsna Lila Stava.txt","utf8",function(error,data){
  let sname=0;
  let ntext="";
  let cout=0;
  while(sname!==-1){
    pname=data.indexOf("Part",sname+5)
  
  sname=data.indexOf("Song",sname+5);

if(pname<sname){
  ptname=data.slice(pname,sname).split(/\r\n|\n/);
  ntext=ntext.concat("\n"+'Text'+ptname[0]);
  
}


  let tsname=data.indexOf("Text",sname+5);   
 let ename=data.indexOf("Song",sname+5);
 
 let vtext=data.slice(sname,ename);
 ntext = ntext.concat("\n"+data.slice(sname,tsname));
let tname=0;
let tnum=1;
while(tname!==-1){
   cout++;
    tname=vtext.indexOf("Text",tname+5);
    tename=vtext.indexOf("Text",tname+5);
    
    let dtext=vtext.slice(tname,tename).split(/\r\n|\n/);
   
    let left=false;
  let right=false;
let sl=1;
// let dutext="";
// for(let i in dumtext){
//   if(dumtext[i]!=="" && dumtext[i]!==" "){
//     dutext=dutext.concat("\n"+dumtext[i])
//   }
// }

// let dtext=dutext.split(/\r\n|\n/);
// console.log(dtext);

// for(let i in dtext){
//   if(dtext[i].indexOf(";")!==-1){
//     console.log(i);
//     sl=((i-2)/2)+2;
//     break;
//   }
// }


// if(tname!==-1){
//   ntext=ntext.concat("\n"+"Text")
// }

if(tname!==-1) ntext=ntext.concat("\n"+'Text'+tnum);
  for(let i=sl;i<dtext.length;i++){

    
   
      if(left){
          if(dtext[i]!=="" && dtext[i]!==" ") right=true;
      } 
    
      if(dtext[i].indexOf(";")!==-1) left=true;
      if(dtext[i]!=="" && dtext[i]!==" " ) ntext=ntext.concat("\n"+dtext[i]);
      if(left && right) break;
    }


   tnum++;

}



 
  
  }  
  
  fs.writeFile("./6canto2.txt",ntext, function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });
   
});



// console.log(val);

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