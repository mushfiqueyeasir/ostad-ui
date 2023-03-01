import React from "react";
import bannerLogo from "../../assets/bannerIcon.png";

const Banner = () => {
  return (
    <div className="bannerBg ">
      <div className="container mx-auto gap-10 py-10 grid grid-cols-6 px-4">
        <div className="col-span-6 lg:col-span-1 flex justify-start ">
          <img
            src={bannerLogo}
            alt=""
            className="w-[40%] lg:w-[90%] h-auto lg:h-[70%]  "
          />
        </div>
        <div className="col-span-6 lg:col-span-3 ">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Tech and development
          </h2>
          <h2 className="text-lg lg:text-xl pt-4 lg:pt-8 font-semibold">
            স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
            বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
            নিচের বাটনে।
          </h2>

          <div className="pt-7 flex gap-x-2">
            <button className="flex gap-x-1 lg:gap-x-2 items-center font-semibold bg-[#E9EFFF] rounded-md px-3 py-2 text-xs lg:text-base">
              <i className="fa-solid fa-book" />
              ৭টি লাইভ কোর্স
            </button>
            <button className="flex  gap-x-1 lg:gap-x-2 items-center font-semibold bg-[#E9EFFF] rounded-md px-3 py-2 text-xs lg:text-base">
              <i className="fa-solid fa-people-group"></i>
              ১৪২৪৫ জন Ostad গ্র্যাজুয়েট
            </button>
          </div>

          <div className="pt-7 flex gap-x-2">
            <button className="flex gap-x-2 items-center font-semibold bg-[#FFCD33] hover:bg-[#FFC000]  hover:border-[#FFC000] active:bg-[#FFAB00] active:border-[#FFAB00] border-2 border-[#FFCD33] rounded-md px-5 py-3 text-white">
              START LEARNING
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="flex gap-x-2 items-center font-semibold bg-[#F9F9FA] hover:bg-[#FFE699] rounded-md px-5 py-3 border-[1px] border-black">
              ASSESSMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
