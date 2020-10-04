import React, { useState } from 'react';
import { BrowserRouter, Link, Redirect, Route,Switch, } from "react-router-dom";

import Csub from "./comp/csub"
import Book from "./comp/books"
import {AudioProvider} from "./comp/player"

import Search from "./comp/search"






function App() {
  



  return (
    <BrowserRouter>



        <Switch>
        <AudioProvider>
          <Route exact path="/">

            <Link to="./iskcon">iskcon</Link>
            <Link to="./topics">song books</Link>
          </Route>
          <Route path="/iskcon">
            <Csub />
          </Route>
          <Route path="/topics">
          
          <Search />
                      <Book />
                      
                      
          </Route>
          </AudioProvider>

          </Switch>
       
     
    </BrowserRouter>
  );
}

export default App;
