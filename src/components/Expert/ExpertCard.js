const ExpertCard = ({ data }) => {
  const { banner, name, post, company } = data;

  return (
    <div className="rounded-xl shadow-md hover:scale-[0.98] ease-in-out duration-300">
      <div className="relative top-0 left-0  ">
        <img src={banner} alt="" className="relative top-0 left-0 rounded-xl" />
        <div className="absolute bottom-[0px] left-[0px] w-full h-[150px] bg-[#00000094] rounded-b-xl">
          <div className="text-white text-center py-4">
            <h2 className="text-2xl font-bold">{name}</h2>
            <h2 className="text-lg">{post}</h2>
            <div className="flex items-center justify-around pt-4">
              {company.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt=""
                  className={
                    index !== 1
                      ? "w-[46px] bg-white rounded-md"
                      : "w-[88px] bg-white p-3 rounded-md"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
