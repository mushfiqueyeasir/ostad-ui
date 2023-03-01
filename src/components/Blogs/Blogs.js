import React from "react";
import Slider from "react-slick";
import blogLogo from "../../assets/blogLogo.png";
import backArrow from "../../assets/backArrow.png";
import nextArrow from "../../assets/nextArrow.png";
import BlogCard from "./BlogCard";

const Blogs = ({ blogsData }) => {
  const CustomArrow = ({ onClick, direction }) => {
    const icon = direction === "left" ? backArrow : nextArrow;
    return (
      <button
        className={`custom-arrow custom-arrow-blog-${direction} w-[50px]`}
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
  const renderSlides = blogsData.map((item, index) => (
    <BlogCard key={index} data={item} />
  ));
  return (
    <div>
      <div className="bg-white">
        <div className="container mx-auto py-5 lg:py-10">
          <div className="flex flex-col gap-3 px-2">
            <div className="flex items-center gap-x-2 font-bold text- lg:text-4xl ">
              <img src={blogLogo} alt="" className="w-[40px]" />
              <h2 className="mb-[-15px]">
                ক্যারিয়ার গাইডলাইন নিয়ে আরও জানতে পড়ুন
              </h2>
            </div>
            <p className="text-base lg:text-lg font-semibold">
              স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
              নিচের বাটনে।
            </p>
          </div>
          <div className="py-6 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {blogsData.map((item, index) => (
              <BlogCard key={index} data={item} even={index % 2 === 1} />
            ))}
          </div>

          <div className="md:hidden py-6 mt-10">
            <Slider {...settings}>{renderSlides}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
