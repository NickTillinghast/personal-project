import React, { Component } from "react";
import Images from "./Images";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";

import "./PersonalWork2.css";

export default class PersonalWork2 extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      width: -1
    };
  }
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState(prevState => {
      return { currentImage: prevState.currentImage - 1 };
    });
  };
  gotoNext = () => {
    this.setState(prevState => {
      return { currentImage: prevState.currentImage + 1 };
    });
  };

  render() {
    return (
      <div className="portfolio-container">
        <div>
          <div>
            <Gallery photos={Images} onClick={this.openLightbox} margin={3} />
            <Lightbox
              images={Images}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </div>
        </div>
      </div>
    );
  }
}
