import React, { Component } from "react";

import { Link } from "react-router-dom";
import logo from "./logo.png";
export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="logo-div">
            <img className="logo" src={logo} alt="none" />
          </div>
          <ul className="tabs">
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/About">
              About
            </Link>
            <Link className="links" to="/ClientLogin">
              Client Login
            </Link>
            <Link className="links" to="/Portfolio">
              Porfolio
            </Link>
            <Link className="links" to="/Contact">
              Contact
            </Link>
          </ul>
        </header>
      </div>
    );
  }
}
