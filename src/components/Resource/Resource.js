import React from "react";
import Slider from "react-slick";
import resourceLogo from "../../assets/resourceLogo.png";
import backArrow from "../../assets/backArrow.png";
import nextArrow from "../../assets/nextArrow.png";
import ResourceCard from "./ResourceCard";

const Resource = ({ resourceData }) => {
  const CustomArrow = ({ onClick, direction }) => {
    const icon = direction === "left" ? backArrow : nextArrow;
    return (
      <button
        className={`custom-arrow custom-arrow-resource-${direction} w-[50px]`}
        onClick={onClick}
      >
        <img src={icon} alt="" />
      </button>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
  const renderSlides = resourceData.map((item, index) => (
    <ResourceCard key={index} data={item} />
  ));
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 px-2">
          <div className="flex items-center gap-x-2 font-bold text-lg lg:text-4xl ">
            <img src={resourceLogo} alt="" className="w-[60px]" />
            ফ্রি ভিডিও রিসোর্স
          </div>
          <p className="text-base lg:text-lg font-semibold">
            স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
            বাটনে।
          </p>
        </div>
        <hr className="border-[#EAECF0] border-2 my-4" />

        <div className="py-10">
          <Slider {...settings}>{renderSlides}</Slider>
        </div>
      </div>
    </div>
  );
};

export default Resource;
