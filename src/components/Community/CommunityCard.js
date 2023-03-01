import React, { useState } from "react";

const CommunityCard = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  const { banner, banner2, member, title, join } = data;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-[#FFFFFF] rounded-md p-4 grid grid-cols1 lg:grid-cols-2 gap-4 border-2 hover:border-[#8AABFF] border-opacity-0 "
    >
      <div>
        <img
          src={hovered ? banner2 : banner}
          alt=""
          className="rounded-md object-cover h-48"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <div>
          <button className="flex items-center gap-2 p-2 bg-[#E9EFFF] rounded-md">
            <i class="fa-solid fa-people-group"></i>
            {member}
          </button>
        </div>

        <h2 className="text-xl lg:text-2xl font-bold ">{title}</h2>
        <button className="rounded-md bg-[#EAECF0] hover:bg-[#D0D5DD]  active:bg-[#98A2B3] flex justify-center items-center gap-2 p-3  text-center  font-bold text-lg">
          {join} <i class="fa-brands fa-facebook"></i>
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;
