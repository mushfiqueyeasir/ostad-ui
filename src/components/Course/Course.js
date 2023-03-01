import React from "react";
import Slider from "react-slick";
import courseIcon from "../../assets/courseIcon.png";
import liveCourseIcon from "../../assets/liveCourse.png";
import CourseCard from "./CourseCard";

const Course = ({ courseData }) => {
  const settings = {
    arrow: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const renderSlides = courseData.map((item, index) => (
    <CourseCard key={index} data={item} even={index % 2 === 1} />
  ));
  return (
    <div className="bg-[#F9F9FA]">
      <div className="container mx-auto py-5 lg:py-10">
        <div className="flex flex-col gap-3 px-3">
          <div className="flex items-center gap-x-2 font-bold text-lg  lg:text-4xl ">
            <img src={courseIcon} alt="" className="w-[40px]" />
            <h2 className="mb-[-15px]">Ostad helps you in your career with</h2>
          </div>
          <p className="text-sm lg:text-lg font-semibold">
            স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
            বাটনে।
          </p>
        </div>

        <div className="py-6 mt-10 bg-[#FFFFFF] px-4 rounded-lg ">
          <div className="flex items-center gap-x-3 font-bold text-xl lg:text-3xl">
            <img src={liveCourseIcon} alt="" className="w-[40px]" />
            লাইভ কোর্সসমূহ
          </div>

          <div className="py-6 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {courseData.map((item, index) => (
              <CourseCard key={index} data={item} even={index % 2 === 1} />
            ))}
          </div>

          <div className="md:hidden py-6 bg-[#FFFFFF] rounded-lg ">
            <Slider {...settings}>{renderSlides}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
