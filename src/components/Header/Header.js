import React, { Component } from "react";

import { Link } from "react-router-dom";
import logo from "./logo.png";
export default class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <header className="header">
          <div className="logo-div">
            <img className="logo" src={logo} alt="none" />
          </div>
          <ul className="tabs">
            <Link className="header-links" to="/ClientLogin">
              Client Login
            </Link>
            <Link className="header-links" to="/Contact">
              Contact
            </Link>

            <Link className="header-links" to="/About">
              About
            </Link>
            <Link className="header-links" to="/Portfolio">
              Portfolio
            </Link>
            <Link className="header-links" to="/">
              Home
            </Link>
          </ul>
        </header>
      </div>
    );
  }
}
