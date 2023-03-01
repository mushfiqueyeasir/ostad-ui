import React from "react";
import { comp } from "../../utility/utilityFunctins";

import Slider from "react-slick";
const TrustedCompany = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: false,
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: false,
          slidesToShow: 2,
        },
      },
    ],
  };
  const renderSlides = comp.map((item, index) => (
    <img
      src={item}
      key={index}
      alt=""
      className="w-[170px] h-[120px] object-contain bg-white rounded-md"
    />
  ));
  return (
    <div className="bg-[#101828] py-10 px-3">
      <h2 className="text-2xl font-bold text-white text-center ">
        Top companies trust Ostad
      </h2>

      <div className="py-6">
        <Slider {...settings}>{renderSlides}</Slider>
      </div>
    </div>
  );
};

export default TrustedCompany;
