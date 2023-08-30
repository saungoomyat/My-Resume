import React from "react";
import { Switch, Route } from "react-router-dom";
// import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./NavBar";

function App() {
    
  return (
      <div>
          <NavBar />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/education">
                  <Education />
              </Route>
              <Route path="/experience">
                  <Experience />
              </Route>
              <Route path="/skills">
                  <Skills />
              </Route>
              <Route path="*">
                  <h1>404 not found</h1>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
