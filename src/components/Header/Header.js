import React, { Component } from "react";
// import { Router } from "react-router-dom";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="logo">
            <div>logo</div>
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
