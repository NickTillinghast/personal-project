import React, { Component } from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572966672/Sized%20down%20for%20personal%20project/hm9xwlumvwp4hqo7hev4.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572966671/Sized%20down%20for%20personal%20project/fz44dj0dxrisklypj0r8.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572966671/Sized%20down%20for%20personal%20project/z458aiuqq5spmqjcb2ig.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/l2jdnodfytdxphngpsjb.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/kiq0fkmghcnfxttqcfen.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/xtjhlpzyfrqpmuchmdgs.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/thxcitvigyszmckcyul6.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970887/Sized%20down%20for%20personal%20project/uld8inuay6x5qihapri3.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970887/Sized%20down%20for%20personal%20project/xgxt11kt3bjn4rszxb3l.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970887/Sized%20down%20for%20personal%20project/ytt5w0ttiwnittnaeeba.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970886/Sized%20down%20for%20personal%20project/pbeownjnsg9vqbyzgoxn.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970886/Sized%20down%20for%20personal%20project/oc9bq4vpfz4gj2ekj7cl.jpg"
];

export default class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="lightbox-div">
        <button
          type="lb-button"
          onClick={() => this.setState({ isOpen: true })}
        >
          <img
            className="lightbox-image"
            src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1572972286/Sized%20down%20for%20personal%20project/utezltlhvm9b0lotu1al.jpg"
            alt="none"
          />
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}
