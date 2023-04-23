import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./ImageSlider.css"

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const images = [
    "https://via.placeholder.com/800x400/1abc9c/ffffff?text=Image+1",
    "https://via.placeholder.com/800x400/3498db/ffffff?text=Image+2",
    "https://via.placeholder.com/800x400/9b59b6/ffffff?text=Image+3",
    "https://via.placeholder.com/800x400/e74c3c/ffffff?text=Image+4"
  ];
  const imageElements = images.map((imageSrc, index) => {
    return (
      <div key={index} className="Tunisian_images">
        <img className="Tunisian_image" src={imageSrc} alt={`Image ${index + 1}`} style={{borderRadius: "40px", margin: "10px"}}/>
      </div>
    );
  });
  return (
    <Slider {...settings} >
      {imageElements}
    </Slider>
  );
}

export default ImageSlider;
