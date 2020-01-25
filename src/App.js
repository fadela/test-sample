import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/home";
import AboutMe from "./pages/aboutme/AboutMe";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/home" component={Home} />
        <Route exact path="/about-me" component={AboutMe} />
      </div>
    </Router>
  );
}

export default App;
