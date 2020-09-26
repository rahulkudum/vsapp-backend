import React, { useState, useEffect,useContext } from 'react';

import {AudioContext,BookContent} from "./player"
import Audio from "./audio"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function Song(props) {
    
    let { songid } = useParams();
    let id=Number(songid);
    const [link,setLink]=useContext(AudioContext);
  
    const [content,setContent]=useContext(BookContent);
    const [nval, setNval] = useState(["yhcgvm"]);
    const [k, sk] = useState(["gv"]);

let ia;
let ai;
    for(let i in content[props.i1].chap[props.i2].song){
        if(content[props.i1].chap[props.i2].song[i].index===id){
           ia=i;
           ai=Number(i)+1;
        }
        
    }
  

    useEffect(()=>{
        let dlink={...link};
       dlink.state=true;
       setLink(dlink);
    },[]);




    return (


        <p>{k.map((cont) => {
            {/* function tr(){
            
            console.log('====================================');
            console.log(fun);
            console.log('====================================');
             setNval(fun);
            } */}
            //let dum=[...data];
            
            let id2= ai>=content[props.i1].chap[props.i2].song.length ?  props.id2 : content[props.i1].chap[props.i2].song[ai].index;


            let fun = content[props.i1].inside.slice(content[props.i1].chap[props.i2].song[ia].index,id2 );



            const ptext = fun.split(/\r\n|\n/);
           


            return (
                <div>
                    
                    <p >{ptext.map((gem) => {
                        return (
                            <p>{gem}</p>
                        );
                    })}</p>

                    <Audio />
                </div>
            );
        }
        ) }</p>
    );
}

export default Song;
