import React from 'react';

// react component for creating beautiful carousel
import Carousel from 'react-slick';

// styles
import Img1 from '../../assets/img/data/slideshow-img1.jpg';
import Img2 from '../../assets/img/data/slideshow-img2.jpg';
import Img3 from '../../assets/img/data/slideshow-img3.jpg';
const images = [Img1, Img2, Img3];

function SlideShow(props) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
     <Carousel {...settings}>
      {images.map((image, key) => {
        return (
          <div key={key}>
            <div
              className="slick-image"
              style={{ background: `url(${image}) no-repeat` }}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default SlideShow;