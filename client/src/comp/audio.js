import React, { useContext, useRef } from "react";
import {AudioContext} from "./player";
function Audio() {
    const [link,setLink]=useContext(AudioContext);
    const audi=useRef();
    function forward(){
        audi.current.currentTime+=30.0;      
        
   }
   function close(){
       let dlink={...link};
       dlink.state=false;
       setLink(dlink);
   }
    return (
        <div>
        {link.state&&<div>
            <audio ref={audi} style={{ width: "50%" }} controls src={link.name}>

                Your browser does not support the audio element.
            </audio>
            <button onClick={forward} >forward</button>
            <button onClick={close}>close</button>
            </div>
        }
        </div>
    );
}

export default Audio;