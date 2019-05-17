import React, { Component } from "react";
import "./App.css";
import Navbar from "./NavBar/NavBar";
import Posts from "./Posts/Posts";
import AboutMe from "./AboutMe/AboutMe";

import { BrowserRouter, Route } from "react-router-dom";
import FullPost from "./FullPost/FullPost";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Posts} />
        <Route path="/fullPost/:id" exact component={FullPost} />
        <Route path="/aboutMe" exact component={AboutMe} />
      </BrowserRouter>
    );
  }
}

export default App;
