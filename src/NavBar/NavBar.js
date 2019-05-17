import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img src={logo} className="App-logo" alt="logo" />
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutMe">
                My Blog
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavBar;
