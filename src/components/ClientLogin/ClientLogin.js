import React, { Component } from "react";
import AuthComponent from "../AuthComponent/AuthComponent";
import "./ClientLogin.scss";

// import "./ClientLogin.css";

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
        <div className="form-text">
          Please log in and view your lovely photos. You will be asisted through
          the viewing process and have instructions on how to download your
          images.
        </div>

        <AuthComponent />

        <div className="circles">
          <div className="form-bottom">
            <img
              className="client-page-img"
              src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573249721/Sized%20down%20for%20personal%20project/lbbcbqmb7an1lhzmqzop.jpg"
              alt="none"
            />
          </div>
          <div className="form-bottom">
            <img
              className="client-page-img"
              src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573250109/Sized%20down%20for%20personal%20project/qba24qw396hvpri5hyob.jpg"
              alt="none"
            />
          </div>
          <div className="form-bottom">
            <img
              className="client-page-img"
              src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573249721/Sized%20down%20for%20personal%20project/kgmjxczlq54d1dotelra.jpg"
              alt="none"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ClientLogin;
