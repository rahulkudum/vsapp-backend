import React, {useState,useEffect} from "react";
import {BookContent} from "./player"
import {useLocal} from "./hooks";
function Search(){

    const [val,setVal]=useLocal("fun","");
    const [arr,setarr]=useState([]);
    useEffect(() => {
        // fetch("/files/" + "Saranagati")
        //     .then(res => {
        //         //console.log(res);
        //         return res.text();
        //     })
        //     .then(text => {
        //         setVal(text);
                setarr(prev => {
                    return([...prev,{name:"Saranagati",inside:val,state:false,chap:[]}]);
                });
            // });
    }, [])

    

    console.log(arr);

 //console.log(JSON.parse(val));

function search(e){
e.preventDefault();
console.log(val);


}


    return(
        <>
            <form onSubmit={search}>
                <input onChange={(e)=>{
                    setVal(e.target.value);
                }} value={val}></input>
                <button type="submit">Search</button> 
            </form>
        </>
    );;
}

export default Search;
