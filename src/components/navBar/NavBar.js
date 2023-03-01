/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../../assets/logo ostad.png";
import langLogo from "../../assets/langLogo.png";
import langLogoBn from "../../assets/langLogoBng.png";
import menuIcon from "../../assets/menuIcon.png";

const NavBar = () => {
  const [country, setCountry] = useState(true);

  const handleCountry = () => {
    setCountry(!country);
  };
  const navItems = (
    <>
      <li tabIndex={0} className="l">
        <p className="hover:bg-[#FFFFFF] roundedNone border-b-2  border-[#FFC000] mt-[-.75rem] border-opacity-0 hover:border-opacity-100 active:text-black">
          সেট ইয়োর গোল
          <i class="fa-solid fa-chevron-down"></i>
        </p>
      </li>
      <li>
        <p className="hover:bg-[#FFFFFF] roundedNone border-b-2  border-[#FFC000] mt-[-.75rem]  border-opacity-0 hover:border-opacity-100 active:text-black">
          আপকামিং লাইভ ব্যাচ
        </p>
      </li>
      <li>
        <button
          onClick={handleCountry}
          className="flex items-center active:bg-white active:text-black hover:bg-white border-b-2  border-[#FFC000] mt-[-.75rem]  border-opacity-0 hover:border-opacity-100 active:bg-none roundedNone"
        >
          <img
            src={country ? langLogo : langLogoBn}
            alt=""
            className="w-[24px] h-[24px] rounded-md object-cover "
          />
          <h2 className="font-semibold">{country ? "ENGLISH" : "বাংলা"}</h2>
        </button>
      </li>
      <li>
        <button
          type="button"
          className=" items-center px-[24px] py-[8px] border-2 border-[#FFC000] bg-[#FFFBEE] font-semibold hover:bg-[#FFE699] active:bg-[#FFD966] active:text-black hidden lg:flex mb-3"
        >
          Login
        </button>
      </li>
    </>
  );
  return (
    <div className="bg-[#FFFFFF] border-b-2 border-[#E9E9E9]">
      <div className=" container mx-auto navbar pt-3 pb-0">
        <div className="navbar-start">
          <a
            href="https://ostad.app/"
            className="cursor-pointer normal-case text-xl"
          >
            <img src={logo} alt="" className="w-[140px]" />
          </a>
        </div>

        {/* desktop navMenu */}
        <div className="navbar-end gap-4">
          <ul className="hidden lg:flex menu menu-horizontal px-1 font-semibold pb-0">
            {navItems}
          </ul>
          <button
            type="button"
            className="flex items-center px-[13px] py-[6px] border-2 border-[#FFCD33] bg-[#FFCD33] font-semibold rounded-lg md:hidden"
          >
            Login
          </button>

          {/* phone nav menu  */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className=" px-2 lg:hidden">
              <img src={menuIcon} alt="" className="w-[16px]" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
