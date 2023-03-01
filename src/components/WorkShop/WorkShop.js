import React from "react";
import Slider from "react-slick";
import workshopIcon from "../../assets/workshop.png";

import CourseCard from "../Course/CourseCard";

const WorkShop = ({ courseData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
  };
  const renderSlides = courseData.map((item, index) => (
    <CourseCard key={index} data={item} even={index % 2 === 1} />
  ));
  return (
    <div className="bg-[#F9F9FA]">
      <div className="container mx-auto pb-10 ">
        <div className="p-6 bg-[#FFFFFF] px-4 rounded-lg ">
          <div className="flex items-center gap-x-3 font-bold text-xl lg:text-3xl">
            <img src={workshopIcon} alt="" className="w-[40px]" />
            ওয়ার্কশপ
          </div>

          <div className="py-6 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {courseData.map((item, index) => (
              <CourseCard key={index} data={item} even={index % 2 === 1} />
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

export default WorkShop;
