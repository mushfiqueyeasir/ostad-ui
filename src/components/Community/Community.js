import React from "react";
import Slider from "react-slick";
import communityLogo from "../../assets/communityLogo.png";
import CommunityCard from "./CommunityCard";

const Community = ({ communityData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
  };
  const renderSlides = communityData.map((item, index) => (
    <CommunityCard key={index} data={item} />
  ));
  return (
    <div>
      <div className="bg-[#F9F9FA] px-3 ">
        <div className="container mx-auto py-5 lg:py-10">
          <div className="flex flex-col gap-3 px-3">
            <div className="flex items-center gap-x-2 font-bold text- lg:text-4xl ">
              <img src={communityLogo} alt="" className="w-[40px]" />
              <h2 className="mb-[-15px]">জয়েন করুন আমাদের কমিউনিটিতে</h2>
            </div>
            <p className="text-base lg:text-lg font-semibold">
              স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
              নিচের বাটনে।
            </p>
          </div>

          <div className="py-6 hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-3">
            {communityData.map((item, index) => (
              <CommunityCard key={index} data={item} even={index % 2 === 1} />
            ))}
          </div>

          <div className="md:hidden py-6 mt-10 bg-[#FFFFFF] rounded-lg ">
            <Slider {...settings}>{renderSlides}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
