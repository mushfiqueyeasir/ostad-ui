import React from "react";

const BlogCard = ({ data }) => {
  const { banner, date, minRead, title, catagory } = data;
  return (
    <div className=" rounded-xl border-2 hover:border-[#FFC000] hover:shadow">
      <img
        src={banner}
        alt=""
        className="rounded-t-xl h-[156px] object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 font-semibold text-[#475467]">
          <h2>{date}</h2>
          <h2>.</h2>
          <h2>{minRead}</h2>
        </div>
        <h2 className="text-2xl font-bold ">{title}</h2>

        <div className="pt-6 font-semibold">
          <p>{catagory}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
