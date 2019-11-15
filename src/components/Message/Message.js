import React, { Component } from "react";
import "./Message.css";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form className="message-form">
        <div>
          <label htmlFor="to">To:</label>
          <input type="tel" name="to" id="to" />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea name="body" id="body" />
        </div>
        <button type="submit">Send message</button>
      </form>
    );
  }
}

export default Message;
