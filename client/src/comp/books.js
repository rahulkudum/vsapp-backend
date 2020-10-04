import React, { useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { AndroidExoPlayer } from '@ionic-native/android-exoplayer/index.js';
import Sub from "./sub"
import {SongContext,BookContent} from "./player"
import Audio from "./audio"
import Part from "./part"
const androidExoPlayer=  AndroidExoPlayer();




function Book() {
   let { path, url } = useRouteMatch();
   const[songs,setSongs] =useContext(BookContent)
   console.log(songs);
   
   return(

   <div className="top">
   <h1 style={{ color: "blue" }}>Vaishnava songs</h1>
   {androidExoPlayer.show({url:"https://www.youtube.com/watch?v=VfGa0NgAm_Q"})}
  <Switch>
 <Route exact path={path}>

 {songs.map((td)=>{
  return(
    <p>
    <Link  to={`${url}/${td.name}`}>{td.name}</Link> 
    <br/>
    </p>
  );

})}  
 </Route>
 <Route path={`${path}/:name`}>
  <Part  />
 </Route>
</Switch>



   
   
  
   
 </div>
   );


}

export default Book;