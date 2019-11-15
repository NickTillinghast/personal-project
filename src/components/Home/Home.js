import React, { Component } from "react";
import Images from "../Lightbox";

import "react-image-lightbox/style.css";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-main">
        {/* <div className="main-bottom-border-1"></div> */}
        <div className="main-box">
          <Images />
        </div>
        <div className="main-bottom-border"></div>

        <div className="personal-box">
          <div>
            Welcome to my website. I have always loved imagery and the emotion
            that a still image can have. I pride myself on not only documenting
            the special times that happen in life, but also capturing the
            feelings of that time as well.Sooooooo my website is gonna be packed
            with imagery. I really want my work to speak for itself. I love real
            moments and true colors.
          </div>
          <div className="main-bottom-border-1"></div>

          <div className="home-gallery-link">
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
            <div>
              <div className="gallery-1">
                <a href="https://nicktillinghastphotography.pixieset.com/davidandalexisentire/">
                  <img
                    className="gal-1-image"
                    src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/ffxtfxfzkqiaojlwxpv9.jpg"
                    alt="none"
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="gallery-1">
                <a href="https://nicktillinghastphotography.pixieset.com/delaneyfamily/">
                  <img
                    className="gal-1-image"
                    src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573181929/Sized%20down%20for%20personal%20project/rwfdguxeibuo9fgvqz57.jpg"
                    alt="none"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
