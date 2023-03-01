import React from "react";
import Slider from "react-slick";
import expertLogo from "../../assets/expertLogo.png";
import ExpertCard from "./ExpertCard";
import backArrow from "../../assets/backArrow.png";
import nextArrow from "../../assets/nextArrow.png";

const Expert = ({ expertData }) => {
  const CustomArrow = ({ onClick, direction }) => {
    const icon = direction === "left" ? backArrow : nextArrow;
    return (
      <button
        className={`custom-arrow custom-arrow-expert-${direction} w-[50px]`}
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
  const renderSlides = expertData.map((item, index) => (
    <ExpertCard key={index} data={item} />
  ));
  return (
    <div>
      {" "}
      <div className="bg-[#F9F9FA]">
        <div className="container mx-auto py-5 lg:py-10">
          <div className="flex flex-col gap-3 px-2">
            <div className="flex items-center gap-x-2 font-bold text- lg:text-4xl ">
              <img src={expertLogo} alt="" className="w-[40px]" />
              <h2 className="mb-[-15px]">
                ক্যারিয়ার গড়তে ইন্ডাস্ট্রি এক্সপার্টগন
              </h2>
            </div>
            <p className="text-base lg:text-lg font-semibold">
              স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
              নিচের বাটনে।
            </p>
          </div>

          <div className=" py-6 pb-14 lg:py-10">
            <Slider {...settings}>{renderSlides}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
