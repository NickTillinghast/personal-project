import React, { Component } from "react";
import axios from "axios";
import "./Contact.scss";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      info: ""
    };
  }
  firstHandleChange(value) {
    this.setState({
      firstName: value
    });
  }
  lastHandleChange(value) {
    this.setState({
      lastName: value
    });
  }
  emailHandleChange(value) {
    this.setState({
      email: value
    });
  }
  phoneHandleChange(value) {
    this.setState({
      phone: value
    });
  }
  infoHandleChange(value) {
    this.setState({
      info: value
    });
  }
  submitButton(e) {
    e.preventDefault();
    let clientInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      info: this.state.info
    };
    alert("email sent");
    axios.post("auth/contact", clientInfo).then(response => {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        info: ""
      });
    });
    console.log(clientInfo);
  }

  render() {
    return (
      <div className="contact-form-home">
        <div className="contact-text">
          <div className="contact-bottom">
            <img
              className="contact-image"
              src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573514621/Sized%20down%20for%20personal%20project/c4rjposrikt85wobxigr.jpg"
              alt="none"
            />
          </div>
          <div className="contact-text-1">
            I love coffee and connecting with people. Please fill my contact
            form and we can meet over a cup of coffee and look at photos
            together.
          </div>
          <div className="contact-text-1">
            I love to get all nerdy about images so please feel free to ask
            anything.
          </div>
        </div>
        <div className="contact-main">
          <form className="contact-form">
            <div className="">
              <div>
                <div>
                  <label className="contact-label">First Name</label>
                </div>
                <input
                  className="contact-input-box"
                  type="text"
                  id="firstName"
                  // placeholder="First Name"
                  onChange={e => this.firstHandleChange(e.target.value)}
                />
              </div>
              <div>
                <div>
                  <label className="contact-label">Last Name</label>
                </div>
                <input
                  className="contact-input-box"
                  type="text"
                  id="lastName"
                  onChange={e => this.lastHandleChange(e.target.value)}
                />
              </div>
              <div>
                <div>
                  <label className="contact-label">Email</label>
                </div>
                <input
                  className="contact-input-box"
                  type="text"
                  id="email"
                  onChange={e => this.emailHandleChange(e.target.value)}
                />
              </div>
              <div>
                <div>
                  <label className="contact-label">Phone Number</label>
                </div>
                <input
                  className="contact-input-box"
                  type="text"
                  id="phoneNumber"
                  onChange={e => this.phoneHandleChange(e.target.value)}
                />
              </div>
              <div>
                <div>
                  <label className="contact-label">Tell me About You</label>
                </div>
                <input
                  className="contact-input-box"
                  type="text"
                  id="infoblurb"
                  onChange={e => this.infoHandleChange(e.target.value)}
                />
              </div>
              <div className="contact-input-box">
                <button
                  className="send-button"
                  onClick={e => this.submitButton(e)}
                  type="submit"
                >
                  Contact me so we can connect over a coffee
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
