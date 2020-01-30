import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/home";
import AboutMe from "./pages/aboutme/AboutMe";
import Contact from './pages/contact/contact';

function App() {
  return ( <
    Router >
    <
    div className = "App" >
    <
    Route exact path = "/home"
    component = {
      Home
    }
    /> <
    Route exact path = "/about-me"
    component = {
      AboutMe
    }
    /> <
    Route exact path = "/contact"
    component = {
      Contact
    }
    /> <
    /div> <
    /Router>
  );
}

export default App;