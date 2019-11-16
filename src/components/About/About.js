import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-main">
        <div className="about-middle">
          <div>
            <div classname="about-start">
              My passion for photography came to me early in my life. My family
              would document the crazy things that would happen in our family
              restaurnt. In college my film days really came to life and I found
              digital after that. After working with many other photographers I
              honed my skills and became obessed with the real moments of life
              and love. Photography for me is not just about pretty pictures but
              also about feelings and time. Sometimes when I look at images I
              can transport back to feelings and remember the love, excitement
              and other feelings of life than make it so wonderful.
            </div>
          </div>
        </div>

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
          <div className="about-bottom-border"></div>
          <div className="about-family">
            <div>
              I love my family more than words. Being a dad to my girls has
              given me new life and new muses. Plus the bonus of getting being a
              kid all over again. I am very proud of the life that my wife and I
              have built for each other. She's my rock and she also rocks. Below
              are some links with tons of images if my family. Each memeber has
              a page so please check it out.
            </div>
          </div>
        </div>
        <div className="about-middle-bottom">
          <div className="about-bottom-border"></div>
          <div className="about-middle-box">
            <img
              className="about-me-image"
              src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573241184/Sized%20down%20for%20personal%20project/d6usqvhwwb8artzwadoq.jpg"
              alt=""
            />
            <Link className="kinlye-path" to="/Amber">
              <img
                className="about-me-image"
                src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573445434/Sized%20down%20for%20personal%20project/defech5lzysmlxlgzopy.jpg"
                alt=""
              />
            </Link>
            <img
              className="about-me-image"
              src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573523566/Sized%20down%20for%20personal%20project/slvaylltgtkncds1o2jk.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="about-bottom">
          <div className="about-gallery-1">
            <div className="about-text-divs">
              <div>
                There's a huge part of my life that most people do not know
                about me. My wife and I have endured what is in my opinion one
                of the worst things that can happen to a couple. More info here
                if you are willing. Possible tears warning.
              </div>
            </div>
            <div>
              <Link className="kinley-path" to="/Kinley">
                <img
                  className="about-hero-link"
                  src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573515965/Sized%20down%20for%20personal%20project/lqe8dp558bsyddxvqpyo.jpg"
                  alt="none"
                />
              </Link>
            </div>
          </div>
          <div className="about-gallery-1">
            <div className="about-text-divs">
              <div>
                Meet my fist born. She's fierce like her mom and beautiful like
                her mom, but she definately her own person. This little girl is
                so smart and funny. She reads better thank I do and plays piano.
                Click to see more.
              </div>
            </div>
            <Link className="kinley-path" to="/Cora">
              <img
                className="about-hero-link"
                src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573444961/Sized%20down%20for%20personal%20project/fef6jb6p193oberlb8gy.jpg"
                alt="none"
              />
            </Link>
          </div>
          <div className="about-gallery-1">
            <div>
              <div className="about-text-divs">
                Our rainbow baby Scarlett. Her spirit is something to admire.
                She came into this world smiling and wakes up laughing. She
                truley blesses us with her wonderful curiosity and happiness.
                Click to see more smiles.
              </div>
            </div>
            <Link className="kinlye-path" to="/Scarlett">
              <img
                className="about-hero-link"
                src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1573445457/Sized%20down%20for%20personal%20project/oc8uaebggywcrr3flsi4.jpg"
                alt="none"
              />
            </Link>
          </div>
          <div>
            <div className="about-bottom-text">
              {/* <div>
                I also have a serious food passion and will eat just about
                anything once. My favorites are meatball pizza sandwitches and
                REAL pie. I love horror movies and wish I could retire and run
                old theater showing unique movies of my choice. A good time for
                me just being lazy around the house and watching movies. I do
                love nature and hiking when my knees allow. Adventure is out
                there.
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
