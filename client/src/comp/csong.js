import React, { useContext } from "react";
import {ListContent,IskconContent} from "./player";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
function Csong(props){

let {ind}=useParams();
let nind=Number(ind)
const [iskcon,setIskcon]=useContext(IskconContent);
    const [ptext,setPtext]=useContext(ListContent);
let name="";
for(let i in props.tarr){
    if(props.tarr[i].index===nind){
        name=props.tarr[i].name;
        
    }
    
}



//console.log(name);
let text=iskcon.slice(props.start);
let ind1=text.indexOf(name);
let ind2=text.indexOf("Song Name",ind1);
let fun=text.slice(ind1,ind2);
let dum='';
// for(let count=1,fun.indexOf(count)!==-1;count++){
//     let i1=fun.indexOf("("+toString(count)+")");
//     let i2=fun.indexOf("("+toString(count+1)+")");
//     let v1=fun.slice(i1,i2);
//     let i3
    

// }





let vtext=fun.split(/\r\n|\n/);


for (let i in vtext){
    if(vtext[i]==="ISKCON desire tree"||vtext[i+1]==="ISKCON desire tree"){
       vtext.splice(i,1);
        }

}

console.log(vtext);

return(
<div>
    
    <p>{vtext.map((sent,i)=>{
       
        
        return(<p>{sent}</p>);
        
    })}</p>
</div>

);





}


export default Csong;
