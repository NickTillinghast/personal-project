import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-main">
        <div className="about-top"></div>
        <div className="about-middle">
          <div className="about-family">
            <h2>
              <img
                className="family-shot"
                src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1572906257/No%20Db%20images/lurhzj2ldntpraqrz0vk.jpg"
                alt="no"
              />
            </h2>
          </div>
          <div className="about-family">
            <h2>
              I love my family more than words. I love documenting my girls and
              being a kid all over again with them. I owe everything to my
              family without them I wouldn't be here and I can honestly say my
              oldest daughter saved my life.
            </h2>
          </div>
        </div>
        <div className="about-bottom">
          <div className="about-gallery-1">
            <h2>
              There's a huge part of my life that most people do not know about
              me.
            </h2>
          </div>
          <div className="about-gallery-1">
            <h1>bottom stuff</h1>
          </div>
          <div className="about-gallery-1">
            <h1>bottom stuff</h1>
          </div>
        </div>
        <div className="about-very-bottom">
          <h1>
            I really should not be too involved in the english language but here
            I go. My Name is Nick Tillinghast and I take make images and eat
            meatball, pizza, sandwitches. I love horror movies and wish I could
            retire and run old theater showing unique movies of my choice.
          </h1>
        </div>
      </div>
    );
  }
}
