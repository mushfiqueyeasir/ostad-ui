import React from "react";
import "./reactSlick-customStyle.css";
import Slider from "react-slick";
import careerLogo from "../../assets/careerLogo.png";
import backArrow from "../../assets/backArrow.png";
import nextArrow from "../../assets/nextArrow.png";
import CareerGuideCard from "./CareerGuideCard";

const CareerGuide = ({ careerData }) => {
  const CustomArrow = ({ onClick, direction }) => {
    const icon = direction === "left" ? backArrow : nextArrow;
    return (
      <button
        className={`custom-arrow custom-arrow-${direction} w-[50px]`}
        onClick={onClick}
      >
        <img src={icon} alt="" />
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 1.1,
        },
      },
    ],
  };
  const renderSlides = careerData.map((item, index) => (
    <CareerGuideCard key={index} data={item} />
  ));
  return (
    <div className="bg-[#101828] py-10">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 text-white font-bold text-3xl">
          <img src={careerLogo} alt="" className="w-[50px]" />
          এক্সপার্টদের ক্যারিয়ার গাইডলাইন
        </div>

        <div className="lg:pt-10">
          <Slider {...settings}>{renderSlides}</Slider>
        </div>
      </div>
    </div>
  );
};

export default CareerGuide;
