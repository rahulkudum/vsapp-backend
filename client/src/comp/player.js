import React, { createContext, useState, useEffect } from "react";
import { useLocal } from "./hooks";


export const AudioContext = createContext();
export const SongContext = createContext();
export const BookContent = createContext();
export const IskconContent= createContext();
export const ListContent=createContext();

export function AudioProvider({ children }) {

    const books = ["Saranagati", "Gitavali", "Kalayanakalpataru", "Gitamala", "Prarthana"];



    const [val1,setVal1]=useLocal("val1","");
    const [val2,setVal2]=useLocal("val2","");
    const [val3,setVal3]=useLocal("val3","");
    const [val4,setVal4]=useLocal("val4","");
    const [val5,setVal5]=useLocal("val5","");
    
   
    const [content, setContent] = useState([]);
    const[iskcon,setIskcon]=useState("");
    const [list,setList]=useState([]);

    useEffect(() => {
        
            console.log("error");
        fetch("https://quiet-peak-15233.herokuapp.com/files/" + "Vaishnava-song-book")
            .then(res => {
                //console.log(res);
                return res.text();
            })
            .then(text => {
                setIskcon(text);
                console.log("CHECK");
                
            });
       
           
    }, [])

    
    

    useEffect(() => {
        if(val1==""){
            console.log("error");
        fetch("https://quiet-peak-15233.herokuapp.com/files/" + "Saranagati")
            .then(res => {
                //console.log(res);
                return res.text();
            })
            .then(text => {
                setVal1(text);
                
            });
        }
            setContent(prev => {
                return([...prev,{name:"Saranagati",inside:val1,state:false,chap:[]}]);
            });
    }, [])
    useEffect(() => {
        if(val2==""){
        fetch("https://quiet-peak-15233.herokuapp.com/files/" + "Gitavali")
            .then(res => {
                //console.log(res);
                return res.text();
            })
            .then(text => {
                setVal2(text);
                
            });
        }
            setContent(prev => {
                return([...prev,{name:"Gitavali",inside:val2,state:false,chap:[]}]);
            });
    }, [])

    useEffect(() => {
        if(val3==""){
        fetch("https://quiet-peak-15233.herokuapp.com/files/" + "Kalyanakalpataru")
            .then(res => {
                //console.log(res);
                return res.text();
            })
            .then(text => {
                setVal3(text);
                
            });
        }
            setContent(prev => {
                return([...prev,{name:"Kalyanakalpataru",inside:val3,state:false,chap:[]}]);
            });
    }, [])
    useEffect(() => {
        if(val4==""){
        fetch("https://quiet-peak-15233.herokuapp.com/files/" + "Gitamala")
            .then(res => {
                //console.log(res);
                return res.text();
            })
            .then(text => {
                setVal4(text);
                
            });
        }
            setContent(prev => {
                return([...prev,{name:"Gitamala",inside:val4,state:false,chap:[]}]);
            });
    }, [])
    useEffect(() => {
        if(val5==""){
        fetch("https://quiet-peak-15233.herokuapp.com/files/" + "Prarthana")
            .then(res => {
                //console.log(res);
                return res.text();
            })
            .then(text => {
                setVal5(text);
               
            });
        }
            setContent(prev => {
                return([...prev,{name:"Prarthana",inside:val5,state:false,chap:[]}]);
            });
    }, [])
    // arr.push({name:"vgj"});
    
    const [link, setLink] = useState({ name: "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_A_to_J/His_Grace_Agnidev_Prabhu/Vaishnava_Bhajans/ADP_Bhajans_-_Radha_krishna_prana_mora_jugala.mp3", state: false });
    const [song, setSong] = useState({ state: false });




    return (
        <AudioContext.Provider value={[link, setLink]}>
            <SongContext.Provider value={[song, setSong]}>
                <BookContent.Provider value={[content, setContent]}>
                <IskconContent.Provider value={[iskcon,setIskcon]}> 
                <ListContent.Provider value={[list,setList]}>
                    {children}
                    </ListContent.Provider>
                    </IskconContent.Provider>
                </BookContent.Provider>
            </SongContext.Provider>
        </AudioContext.Provider>
    );

}