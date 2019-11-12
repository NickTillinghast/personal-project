import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
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
  submitButton(e) {
    e.preventDefault();
    let clientInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    };
    axios.post("auth/contact", clientInfo).then(response => {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      });
    });
    console.log(clientInfo);
  }
  render() {
    return (
      <div className="contact-form-home">
        <div className="contact-text">
          Hello world. I love coffe and connecting with people. Please fill my
          contact form and we can meet over a cup of coffee and look at photos
          together.
        </div>
        <div className="contact-main">
          <form className="contact-form">
            <div className="form-box">
              <div>
                <label className>First Name</label>
                <input
                  className="contact-input-box"
                  type="text"
                  id="firstName"
                  onChange={e => this.firstHandleChange(e.target.value)}
                />
              </div>
              <div>
                <label className>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  onChange={e => this.lastHandleChange(e.target.value)}
                />
              </div>
              <div>
                <label className>Email</label>
                <input
                  type="text"
                  id="email"
                  onChange={e => this.emailHandleChange(e.target.value)}
                />
              </div>
              <div>
                <label className>Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  onChange={e => this.phoneHandleChange(e.target.value)}
                />
              </div>
            </div>
            <div className="submit-button-contact">
              <button onClick={e => this.submitButton(e)} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="contact-bottom">
          <img
            className="contact-image"
            src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573514621/Sized%20down%20for%20personal%20project/c4rjposrikt85wobxigr.jpg"
            alt="none"
          />
        </div>
      </div>
    );
  }
}
