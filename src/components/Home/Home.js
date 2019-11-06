import React, { Component } from "react";
import Images from "../Lightbox";

import "react-image-lightbox/style.css";
// import HomeCarousel from "./HomeCarousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
// import { Link, Switch } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // handleClick(e) {
  //   this.setState({href="https://nicktillinghastphotography.pixieset.com/eliseandjames/" })
  // }
  render() {
    return (
      <div className="home-main">
        <div className="main-box">
          <Images />
        </div>
        <div className="home-container">
          <div></div>
        </div>
        <div className="personal-box">
          <div>
            <div>
              <div className="gallery-1">
                <a href="https://nicktillinghastphotography.pixieset.com/eliseandjames/">
                  <img
                    className="gal-1-image"
                    src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1572975817/Sized%20down%20for%20personal%20project/gku6rspbf913vc67xrrj.jpg"
                    alt="none"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="gallery-1">
            <a href="https://nicktillinghastphotography.pixieset.com/davidandalexisentire/">
              <img
                className="gal-1-image"
                src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/ffxtfxfzkqiaojlwxpv9.jpg"
                alt="none"
              />
            </a>
          </div>
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
