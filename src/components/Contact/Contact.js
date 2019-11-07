import React, { Component } from "react";
import snowhouse from "./snowhouse.mp4";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="">
          <video className="video" autoPlay loop muted preload>
            <source src={snowhouse} type="video/mp4" />
          </video>
        </div>
        contact me
      </div>
    );
  }
}
