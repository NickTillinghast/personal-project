import React, { Component } from "react";
// import { Link, Switch } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home-main">
        <div className="main-box">mainbox</div>
        <div className="gallery-box">
          this will hopefully be the carousel box scrolling images.{" "}
        </div>
        <div className="personal-box">
          <div>gallery link</div>
          <div>gallery link</div>
          <div>gallery link</div>
        </div>
        <div className="personal-work">
          this will hopefully be the carousel box scrolling images.{" "}
        </div>
      </div>
    );
  }
}
export default Home;
