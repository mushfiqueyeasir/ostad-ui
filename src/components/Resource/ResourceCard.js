import videoIcon from "../../assets/videoIcon.png";
const ResourceCard = ({ data }) => {
  const { banner, title, subTitle, time, date } = data;

  return (
    <div className="wholeCard  rounded-md border-[2.5px] hover:border-[#EAA61D] hover:shadow ">
      <div className="">
        <div className="">
          <div className="relative top-0 left-0 overflow-hidden ">
            <img
              src={banner}
              alt=""
              className="relative top-0 left-0 zoom ease-in-out duration-300"
            />
            <div className="absolute top-[0px] left-[0px] w-full h-full bg-[#00000077]">
              <img src={videoIcon} alt="" className=" scale-[.6] mt-[-40px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 py-6  px-4 z-10 ">
          <h2 className="flex items-center font-semibold gap-2 text-[#475467] px-6 lg:text-xl ">
            {title}
          </h2>
          <h2 className="flex items-center font-semibold gap-2 text-black px-6 lg:text-2xl ">
            {subTitle}
          </h2>
        </div>

        <div className="text-[#475467] flex items-center gap-4 py-4 px-4 text-xl">
          <div className="flex items-center gap-2">
            <i class="fa-regular fa-clock" />
            {time}
          </div>
          <div className="flex items-center gap-2">
            <i class="fa-regular fa-calendar"></i>
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
