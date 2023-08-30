import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
    
  return (
      <div>
          <NavBar />
          <Switch>
              <Route path="/home">
                  <Home />
              </Route>
              {/* <Route exact path="/dogs">
                  <DogList />
              </Route>
              <Route path="/dogs/new">
                  <NewDog />
              </Route>
              <Route path="/dogs/:id">
                  <DogDetail />
              </Route>
              <Route exact path="/">
                  <Home />
              </Route> */}
              <Route path="*">
                  <h1>404 not found</h1>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
