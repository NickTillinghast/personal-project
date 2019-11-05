import React, { Component } from "react";
// import axiois from "axoios";
import AuthComponent from "../AuthComponent";
import { Link } from "react-router-dom";
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
      </div>
    );
  }
}
export default ClientLogin;
