import React, { Component } from "react";

import "./Footer.scss";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-info">
          <div className="footer-phone">1-602-486-6621</div>
          <div className="footer-line"></div>
          <div>
            <a href="https://www.facebook.com/Nick-Tillinghast-Photography-156345067778579/?ref=bookmarks">
              <FaFacebookF size={40} style={{ color: "grey" }} />
            </a>
          </div>
          <div className="footer-line"></div>
          <div>
            <a href="https://www.instagram.com/nicktillinghastphotography/?hl=en">
              <FaInstagram size={40} style={{ color: "grey" }} />
            </a>
          </div>
          <div className="footer-line"></div>
          <div className="footer-email">nickt2@cox.net</div>
        </div>
      </div>
    );
  }
}
