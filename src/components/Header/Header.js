import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import Dropdown from "../DropDown/Dropdown";
import "./Header.scss";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBar: false
    };
  }

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
              className={
                this.state.navBar ? "navbar-toggle " : "navbar-toggle hidden"
              }
              id="topnav"
            >
              <ul className="tabs">
                <Link
                  onClick={() => this.setState({ navBar: !this.state.navBar })}
                  className="header-links"
                  to="/ClientLogin"
                >
                  Client Login
                </Link>
                <Link
                  onClick={() => this.setState({ navBar: !this.state.navBar })}
                  className="header-links"
                  to="/Contact"
                >
                  Contact
                </Link>
                <div className="header-links">
                  <Dropdown
                    toggleDropDown={() =>
                      this.setState({ navBar: !this.state.navBar })
                    }
                  />

                </div>
                <Link
                  onClick={() => this.setState({ navBar: !this.state.navBar })}
                  className="header-links"
                  to="/About"
                >
                  About
                </Link>

                <Link
                  onClick={() => this.setState({ navBar: !this.state.navBar })}
                  className="header-links"
                  to="/"
                >
                  Home
                </Link>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
