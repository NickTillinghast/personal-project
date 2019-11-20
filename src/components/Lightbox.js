import React, { Component } from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Lightbox.css";

const images = [
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970886/Sized%20down%20for%20personal%20project/pbeownjnsg9vqbyzgoxn.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970886/Sized%20down%20for%20personal%20project/sctmd0e0knarennwn9ww.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970887/Sized%20down%20for%20personal%20project/xgxt11kt3bjn4rszxb3l.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970887/Sized%20down%20for%20personal%20project/uld8inuay6x5qihapri3.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970887/Sized%20down%20for%20personal%20project/ytt5w0ttiwnittnaeeba.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970886/Sized%20down%20for%20personal%20project/oc9bq4vpfz4gj2ekj7cl.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/l2jdnodfytdxphngpsjb.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/wuh0mojnunpw2spf51pc.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/xzso5gnq7jxsqwjkqton.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/d1s2dqqmw2yoiaq8kwb9.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/kiq0fkmghcnfxttqcfen.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/ffxtfxfzkqiaojlwxpv9.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/thxcitvigyszmckcyul6.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572970410/Sized%20down%20for%20personal%20project/xtjhlpzyfrqpmuchmdgs.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572977353/Sized%20down%20for%20personal%20project/nagwiiczvmi7oqh0e3mt.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572977353/Sized%20down%20for%20personal%20project/tuwbctca2xkpnsfxb1dy.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572977353/Sized%20down%20for%20personal%20project/u9fhitmhvbmghkv2sdmn.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572977353/Sized%20down%20for%20personal%20project/t9lisbacmymwz5yeepx5.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572977353/Sized%20down%20for%20personal%20project/oato8j8wg7ch7wjespny.jpg",
  "https://res.cloudinary.com/dqpatwz6c/image/upload/v1572977353/Sized%20down%20for%20personal%20project/rntkkprn9wjpcimfi6en.jpg"
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
            src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1574208493/yuy5fwzkjkjnuljz9xkn.jpg"
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
