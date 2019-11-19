import React, { Component } from "react";
import axios from "axios";
// import "./Contact.css";
// import Message from "../Message/Message";
import "./Contact.scss";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
      // message: {
      //   body: ""
      // },
      // submitting: false,
      // error: false
    };
    // this.onHandleChange = this.onHandleChange.bind(this);
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

  // onHandleChange(event) {
  //   const name = event.target.getAttribute("name");
  //   this.setState({
  //     message: { ...this.state.message, [name]: event.target.value }
  //   });
  // }
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
                  className="contact-input-box"
                  type="text"
                  id="lastName"
                  onChange={e => this.lastHandleChange(e.target.value)}
                />
              </div>
              <div>
                <label className>Email</label>
                <input
                  className="contact-input-box"
                  type="text"
                  id="email"
                  onChange={e => this.emailHandleChange(e.target.value)}
                />
              </div>
              <div>
                <label className>Phone Number</label>
                <input
                  className="contact-input-box"
                  type="text"
                  id="phoneNumber"
                  onChange={e => this.phoneHandleChange(e.target.value)}
                />
              </div>
            </div>
            <div className="submit-button-contact">
              <button
                className="send-button"
                onClick={e => this.submitButton(e)}
                type="submit"
              >
                Send Your Info Via The Magic Of Internet
              </button>
              {/* <form className="contact-form">
                <div>
                  <label htmlFor="to">To:</label>
                  <input type="tel" name="to" id="to" />
                </div>
                <div>
                  <label>Text Me Here:</label>
                  <input
                    className="contact-input-box"
                    id="body"
                    value={this.state.message.body}
                    onChange={this.onHandleChange}
                  />
                </div>
                <button className="message-send-button" type="submit">
                  Send Text Message
                </button>
              </form> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
