import React from "react";
import image1 from "../../assets/images/slider-image-2.jpeg";
import image2 from "../../assets/images/slider-image-3.jpeg";
import image3 from "../../assets/images/grocery-banner.png";
import image4 from "../../assets/images/grocery-banner-2.jpeg";

import Slider from "react-slick";
export default function MainSlider() {
  var settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed:4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
     <div className="flex flex-wrap justify-center items-center">
     <div className="w-full md:w-2/3 ">
        <Slider {...settings}>
          <div className="max-h-[400px] focus:outline-none">
            <img
              src={image1}
              loading="lazy"
              className="w-full block"
              alt="main slider"
            />
          </div>
          <div className="max-h-[400px] focus:outline-none">
            <img
              src={image2}
              loading="lazy"
              className="w-full block"
              alt="main slider"
            />
          </div>
        </Slider>
      </div>
      <div className="w-full md:w-1/3">
                <div>
                <img src={image3} className="w-full h-[200px]" alt="" />
                </div>
                <div>
                <img src={image4} className="w-full h-[200px]" alt="" />
                </div>
                </div>
     </div>

    </>
  );
}
