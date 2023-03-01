const CareerGuideCard = ({ data }) => {
  const { banner, title, instructorImage, instructorName, instructorField } =
    data;

  return (
    <div>
      <div className="w-[30rm] bg-[#1D2939] shadow-xl image-full rounded-md border-[2.5px] border-[#EAA61D] border-opacity-0 hover:border-opacity-100 hover:opacity-80">
        <figure>
          <img src={banner} alt="Shoes" className="rounded-t-md" />
        </figure>
        <div className="flex flex-col gap-y-2 py-6  px-4">
          <h2 className="flex items-center font-semibold gap-2 text-white px-6 lg:text-xl ">
            <i class="fa-regular fa-circle-play" />
            {title}
          </h2>
          <hr className="border-[1px]  border-[#475467]" />

          <div className="flex items-center gap-4  px-5">
            <div>
              <img
                src={instructorImage}
                alt=""
                className="rounded-full w-[48px]"
              />
            </div>
            <div className="text-white">
              <h2 className="text-xl font-semibold">{instructorName}</h2>
              <h2>{instructorField}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuideCard;
