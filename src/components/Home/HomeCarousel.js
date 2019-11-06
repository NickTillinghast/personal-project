import React from "react";
import { Carousel } from "react-responsive-carousel";
import images from "./HomeImages";

const HomeCarousel = props => {
  let homeImages = images.map(image => {
    return (
      <div key={image.id}>
        <img src={image.image} alt="none" />
      </div>
    );
  });

  return (
    <div>
      <Carousel
        className="gallery-box"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        centerMode
        centerSlidePercentage={50}
        showStatus={false}
        showIndicators={false}
      >
        {homeImages}
      </Carousel>
      <div className="mobile-view">{homeImages}</div>
    </div>
  );
};

export default HomeCarousel;
