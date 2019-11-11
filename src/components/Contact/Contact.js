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
      <form className="contact-form">
        <div className="form">
          <div>
            <label className>First Name</label>
            <input
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
        <div className="submit-button">
          <button onClick={e => this.submitButton(e)} type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
