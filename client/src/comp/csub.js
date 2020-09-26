import React, {useContext, useEffect, useState}  from "react";
import {IskconContent, ListContent} from "./player"
import Csong from "./csong"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function Csub(){
    let { path, url } = useRouteMatch();

const [iskcon,setIskcon]=useContext(IskconContent);
const [ptext,setPtext] = useContext(ListContent);
const [eindex,setEindex]=useState("");





useEffect(()=>{
    
    let eind=iskcon.indexOf("Done");
   
   setEindex(eind);


},[iskcon])


//console.log(eindex);
useEffect(()=>{
    
   
  
    let index=iskcon.indexOf("INDEX");
 
  let fun=iskcon.slice(index,eindex);
  //console.log(eindex);
  let vtext=fun.split(/\r\n|\n/);
  //console.log(vtext);
  let etext=[];
for(let i in vtext){
    let j=vtext[i].indexOf(",");
   
    let dum="";
    
    for(let k=0;k<j;k++){
        dum+=vtext[i][k];
        
    }
    let ind=iskcon.indexOf(dum);
    

   if(j!==-1){
       etext.push({name:dum,index:ind});
   }
}
//console.log(etext);
//console.log(etext);
  setPtext(etext);
  

},[eindex])
//console.log(ptext);

return(
    <div>
    <h1>Iskcon Vaishnava songs</h1>

    <Switch>
 <Route exact path={path}>

 {ptext.map((td)=>{
  return(
    <p>
    <Link  to={`${url}/${td.index}`}>{td.name}</Link> 
    <br/>
    </p>
  );

})}  
 </Route>
 <Route path={`${path}/:ind`}>
  <Csong start={eindex} tarr={ptext} />
 </Route>
</Switch>
</div>

);
}

export default Csub;