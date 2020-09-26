import React, { useState,useEffect,useMemo, useContext } from 'react';
import Song from "./song"
import Sub from "./sub"

import {BookContent, SongContext} from "./player"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function Part(props) {
  let { name } = useParams();
  let { path, url } = useRouteMatch();

  const [song,setSong]=useContext(SongContext); 
  const [content,setContent]=useContext(BookContent);
  console.log(content);

 
const [ind,setInd]=useState();

    const [rtext, setTex] = useState([]);
   const [vtext,settVext]=useState([]);
   let ia;
   for(let i in content){
    
        if(content[i].name===name){
          ia=i;
          
        }
    
   }
  
 
 useEffect(()=>{
  


       let sarr=[];
       let sname = -4;
  while (sname !== -1) {
    sname = content[ia].inside.indexOf("Part", sname + 4);

    if (sname !== -1) {
     
      sarr.push(
        //rahul.slice(sname,sname+7)
        {name:content[ia].inside.slice(sname,sname+4),index:sname,song:[]}
      );
    }
  }
  setContent(prev=>{
   let dum=[...prev];
   dum[ia].chap=[...sarr];
   return dum;
  })
  settVext(sarr);
},[]);
        
 
  console.log(content);
 
 
 

 

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
<Sub title={name}/>
</Route>
</Switch>

    
</div>
    

  );
  
}

export default Part;