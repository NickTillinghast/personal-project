import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import Dropdown from "../DropDown/Dropdown";
// import "./Header.css";
import "./Header.scss";
import { IoIosMenu } from "react-icons/io";

export default class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <header className="header">
          <div className="logo-div">
            <img className="logo" src={logo} alt="none" />
          </div>
          <div class="navbar-toggle" id="navbar-toggle">
            <IoIosMenu />
          </div>
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
        </header>
      </div>
    );
  }
}
