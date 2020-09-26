import React, { useState,useEffect,useMemo, useContext } from 'react';
import Song from "./song"

import {SongContext,BookContent} from "./player"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function Sub(props) {
  let { songid } = useParams();
  let { path, url } = useRouteMatch();

  let id=Number(songid);
  


  const [song,setSong]=useContext(SongContext); 



    const [rtext, setTex] = useState([]);
   const [vtext,settVext]=useState([]);
   let ia;
  const [content,setContent]=useContext(BookContent);
  for(let i in content){
    
    if(content[i].name===props.title){
      ia=i;
      
    }

}
let ai;
let i2;
for(let j in content[ia].chap){
if(content[ia].chap[j].index===id){
ai=j;
i2=Number(j)+1;
}

}
console.log(ai,i2);

let id2=i2>=content[ia].chap.length ?  content[ia].inside.length : content[ia].chap[i2].index ;

let fun = content[ia].inside.slice(id, id2  );
  useEffect(()=>{
    
    let sarr=[];
    let sname = -4;
while (sname !== -1) {
 sname = fun.indexOf("Song", sname + 4);

 if (sname !== -1) {
   sarr.push(
     //rahul.slice(sname,sname+7)
     {name:fun.slice(sname,sname+7),index:sname+id,val:false}
   );
 }
}

setContent(prev=>{
  let dum=[...prev];
  dum[ia].chap[ai].song=[...sarr];
  return dum;
 })
  setTex(fun);
  settVext(sarr);
        
  },[]);

  


  
 


 

  return (
    

    <div>
   <Switch>
   <Route exact path={path}>

{vtext.map((td)=>{
 return(
   <p>
   <Link  to={`${url}/${td.index}`}>{td.name}</Link> 
   <br/>
    </p>
 );

})}  
</Route>
<Route  path={`${path}/:songid`}>
<Song i1={ia} id1={id} id2={id2} i2={ai}/>
</Route>
</Switch>

    
</div>

  );
  
}

export default Sub