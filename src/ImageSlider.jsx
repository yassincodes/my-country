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
    "https://lh3.googleusercontent.com/Y6jJ2hlQVgRLv4C4LSNXmi6iYOzb7vKQ4St2Qhdk8FIEDTlzZ1wVotzCy-famAR_gAsB-4HjcRmWkvuu2AzxXZJ-N8QxJaSRjC0ewC_XQAEymKj9fhs7NAUE347MfouIZi8l5bJx9J1x4fRpZbLlJba1U7HMMLzXa2zhTbQqQW5qwJtDUGjkdvRUwFO3OrLFdd7VQrZh-7LEv9Iacl2FfrxzfXp0JlHXD1_sEYBFDgO-CcCA0QtwCXScbYFkG-GPprsw8meGb6vx_n066QV93aowTgYYx_CuqxxEiRRjDbc3GBrFpLk3boIpgx_-oKNKP25DNfDMUAKzCKiEEU2XU47NEExExyFM89_YHDHFEhF1P_d_d37NmL4kfy2KL-QvMLd13JotwEDcQL0Cj5sKxdOkUzIWokKRRbf5-lvUb69gRCGqrxdDzdlFobYq7aWOaorWvsFF4g9Y_sEDqKJ6gNmM-0lTRrJslzwki-iUocg6agy8AMa4dufRn4BTbIXfUDxBlAjPuAPgrP5sx2SRqTFYBK1XwKJI4h2thn_iacXjdc3hnQqLuugBQ2Wev4DTyLTVoQajy8V_p8uMLPbMurFp0pkoYtcbqwnnDrGT9ayjF2mXahUnE8MpHCcEGjMy_PV774T0LA1wPs6O7pozU6rfxE9ZKr1RIHslULT6yRNDtmXmYotTpKjDWcbSMj9ihMAfMCaXMiIOwW_YRQ294xWRfc2bQjHN0PKDoGRZyFWHAku2hAMIm5aZ4TqaxUF7ZGS6szMPDdQzgZO-d-fc54tecOBKzsn7P3PNbfgjr1tA9mexzYxKuuu9auKyXKacmEXBj2AfNpPlzJwtyZCNdL2p73PIKua8_72835Jvt9Be577ErQcjngcHn_X8lU3OEAO4lhUUA1Q-B9E_ejmNbjFOGrDGjpG4Sz4pMbfkFGv5efVLm79yXDvWs0PEWKRW9C7WBLoX4_VVPSZEmfUsxRFAmGwgXGgJ_EdypF5S_dE8e-CiQ9CYcgKZ=w1300-h625-s-no?authuser=0",
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
