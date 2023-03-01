import React from "react";

const CourseCard = ({ data, even }) => {
  const { banner, batch, sit, time, title, price, discountPrice, nextButton } =
    data;
  return (
    <div
      className={
        even
          ? "w-[30rm]  image-full rounded-xl border-[2.5px] border-[#EAA61D]   border-opacity-0 hover:border-opacity-100"
          : "w-[30rm]  image-full rounded-xl border-[2.5px] border-black border-opacity-0 hover:border-opacity-100"
      }
    >
      <figure>
        <img src={banner} alt="Shoes" className="rounded-t-xl" />
      </figure>
      <div className=" text-sm">
        <div
          className={
            even
              ? "flex items-center justify-around py-2"
              : "flex items-center justify-around py-2 bg-[#1D2939]"
          }
        >
          <button
            className={
              even
                ? `text-black rounded-md lg:px-3 lg:py-2 bg-[#FFF6D9] flex items-center  gap-x-1 font-semibold p-1 text-[.6rem] lg:text-base`
                : `text-white rounded-md lg:px-3 lg:py-2 bg-[#101828] flex items-center  gap-x-1 font-semibold p-1 text-[.6rem] lg:text-base`
            }
          >
            {batch}
          </button>
          <button
            className={
              even
                ? `text-black rounded-md lg:px-3 lg:py-2 bg-[#FFF6D9] flex items-center  gap-x-1 font-semibold p-1 text-[.6rem] lg:text-base`
                : `text-white rounded-md lg:px-3 lg:py-2 bg-[#475467] flex items-center  gap-x-1 font-semibold p-1 text-[.6rem] lg:text-base`
            }
          >
            <i className="fa-solid fa-people-group"></i>
            {sit}
          </button>
          <button
            className={
              even
                ? `text-black rounded-md lg:px-3 lg:py-2 bg-[#FFF6D9] flex items-center  gap-x-1 font-semibold p-1 text-[.6rem] lg:text-base`
                : `text-white rounded-md lg:px-3 lg:py-2 bg-[#475467] flex items-center  gap-x-1 font-semibold p-1 text-[.6rem] lg:text-base`
            }
          >
            <i className="fa-regular fa-clock"></i>
            {time}
          </button>
        </div>
        <div>
          <h2 className="text-lg lg:text-2xl font-bold px-4 py-4 lg:py-8">
            {title}
          </h2>
        </div>
        <div
          className={
            even
              ? "bg-[#FFF6D9] py-3 px-4 flex items-center justify-between rounded-b-xl"
              : "bg-[#F9F9FA] py-3 px-4 flex items-center justify-between rounded-b-xl"
          }
        >
          <div className="">
            <h2 className="text-[#FF8C4B] font-semibold lg:text-2xl line-through">
              {price}
            </h2>
            <h2 className="font-semibold lg:text-2xl">{discountPrice}</h2>
          </div>

          <button
            className={
              even
                ? "flex items-center gap-x-2 px-2 py-2 lg:px-4 lg:py-4 lg:text-xl rounded-md bg-[#FFFBEE] hover:bg-[#FFE699] active:bg-[#FFD966] border-2 border-[#FFC000] font-semibold"
                : "flex items-center gap-x-2 px-2 py-2 lg:px-4 lg:py-4 lg:text-xl rounded-md bg-[#EAECF0] hover:bg-[#D0D5DD] active:bg-[#98A2B3] font-semibold"
            }
          >
            {nextButton}
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
