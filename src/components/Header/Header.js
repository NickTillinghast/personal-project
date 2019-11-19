import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import Dropdown from "../DropDown/Dropdown";
// import "./Header.css";
import "./Header.scss";

export default class Header extends Component {
  state = {
    navBar: false
  };

  render() {
    return (
      <div className="header-main">
        <header className="header">
          <div className="logo-div">
            <img className="logo" src={logo} alt="none" />
          </div>
          <div className="myTopnav">
            <div>
              <div
                onClick={() => this.setState({ navBar: !this.state.navBar })}
                className="burger"
              >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
            <div
              class={
                this.state.navBar ? "navbar-toggle" : "navbar-toggle hidden"
              }
              id="topnav"
            >
              <ul className="tabs">
                <Link className="header-links" to="/ClientLogin">
                  Client Login
                </Link>
                <Link className="header-links" to="/Contact">
                  Contact
                </Link>
                <div className="header-links">
                  <Dropdown />
                </div>
                <Link className="header-links" to="/About">
                  About
                </Link>

                <Link className="header-links" to="/">
                  Home
                </Link>

                {/* <Link className="header-links" to="/PersonalWork2">
              second
            </Link> */}
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
