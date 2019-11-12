import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-main">
        <div className="about-middle">
          <div className="about-family">
            <div className="about-hero">
              <div>
                <img
                  className="family-shot"
                  src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573530108/Sized%20down%20for%20personal%20project/g778ovwfvtmbyxdzdbe7.jpg"
                  alt="none"
                />
              </div>
              <div>
                <img
                  className="family-shot"
                  src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573530452/xcjhsgylhmlrwssqfbty.jpg"
                  alt="no"
                />
              </div>
            </div>
          </div>
          <div className="about-family">
            <div>
              I love my family more than words. I love documenting my girls and
              being a kid all over again with them. I owe everything to my
              family without them I wouldn't be here and I can honestly say my
              oldest daughter saved my life.
            </div>
          </div>
        </div>
        <div className="about-middle-bottom">
          <h1>
            I really should not be too involved in the english language but here
            I go. My Name is Nick Tillinghast and I take make images and eat
            meatball, pizza, sandwitches. I love horror movies and wish I could
            retire and run old theater showing unique movies of my choice.
          </h1>
          <div className="about-middle-box">
            <img
              className="about-me-image"
              src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573241184/Sized%20down%20for%20personal%20project/d6usqvhwwb8artzwadoq.jpg"
              alt=""
            />
            <img
              className="about-me-image"
              src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573445434/Sized%20down%20for%20personal%20project/defech5lzysmlxlgzopy.jpg"
              alt=""
            />
            <img
              className="about-me-image"
              src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573523566/Sized%20down%20for%20personal%20project/slvaylltgtkncds1o2jk.jpg"
              alt=""
            />
          </div>
        </div>{" "}
        <div className="about-bottom">
          <div className="about-gallery-1">
            <h2>
              There's a huge part of my life that most people do not know about
              me. My wife and I have endoured what is in my opinion one of the
              worst things that can happen to a couple. If you would like to
              know just click the image.
            </h2>
            <div>
              <Link className="kinley-path" to="/Kinley">
                <img
                  className="kinley-hero"
                  src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573515965/Sized%20down%20for%20personal%20project/lqe8dp558bsyddxvqpyo.jpg"
                  alt="none"
                />
              </Link>
            </div>
          </div>
          <div className="about-gallery-1">
            <h1>bottom stuff</h1>
          </div>
          <div className="about-gallery-1">
            <h1>bottom stuff</h1>
          </div>
        </div>
      </div>
    );
  }
}
