import React from "react";
import logo from "../../assets/ostad logo.png";

const Loading = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex justify-center items-center">
        <img src={logo} alt="" className="w-[35%] zoom-in-out" />
      </div>
    </div>
  );
};

export default Loading;
