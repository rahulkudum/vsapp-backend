import {useEffect, useState} from "react";

function getSaved(key,init){
    const savedValue=JSON.parse(localStorage.getItem(key));

    if(savedValue) return savedValue;
    if(init instanceof Function) return init();
    return init;
}


export function useLocal(key, init){
//const realVal=localStorage.getItem(key) ?? init;    
const [val,setVal]=useState(()=>{
    return getSaved(key,init);
});

useEffect(()=>{
    
    localStorage.setItem(key,JSON.stringify(val));
},[val])

// const save=(nVal) => {
//     setVal(nVal);
//     localStorage.setItem(key,nVal);
// };
return [val,setVal];
}