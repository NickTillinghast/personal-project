import React, { Component } from "react";
// import axiois from "axoios";
import AuthComponent from "../AuthComponent";
import { Link } from "react-router-dom";
import "./ClientLogin.css";
// import { Route } from "react-router-dom";

class ClientLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }
  render() {
    return (
      <div className="form">
        <AuthComponent />
        <Link className="links" to="/AuthComponent"></Link>
        <div className="form-text">
          Please log in and view your lovely photos. You will be asisted through
          the viewing process and have instruction on how to download your
          images.
        </div>
        <br />
        <div className="form-bottom">
          hello again
          <img src="" alt="none" />
        </div>
      </div>
    );
  }
}
export default ClientLogin;
