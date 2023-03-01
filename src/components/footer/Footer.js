import React from "react";

import logo from "../../assets/logo ostad.png";
import google from "../../assets/google.png";
import { social } from "../../utility/utilityFunctins";
const Footer = () => {
  return (
    <div className="bg-[#FFFBEE] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
          <div className="flex flex-col gap-y-5">
            <div>
              <img src={logo} alt="" className="w-[50%] pb-2" />
              <h2 className="text-[#1D2939] font-semibold text-lg">
                অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।
              </h2>
            </div>
            <div>
              <h2 className="text-xl font-bold">ডাউনলোড করুন ওস্তাদ অ্যাপ</h2>
              <img src={google} alt="" className="w-[50%] pt-2" />
            </div>

            <div>
              <h2 className="text-[#1D2939] font-semibold text-lg">
                কমিউনিটি -এর সাথে কানেক্টেড থাকতে
              </h2>
              <div className="flex gap-2">
                {social.map((item, index) => (
                  <button
                    key={index}
                    className="p-2 rounded-md border-2 hover:border-[#FFD658] bg-white hover:bg-[#FFF7DD]"
                  >
                    <img src={item} alt="" className="w-[30px]" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl">কুইক লিঙ্ক</h2>

            <div className="flex flex-col gap-4 pt-6 text-lg font-semibold">
              <h2 className="hover:text-[#FF8C4B] hover:underline cursor-pointer">
                আপকামিং লাইভ ব্যাচ
              </h2>
              <h2 className="hover:text-[#FF8C4B] hover:underline cursor-pointer">
                ফ্রি লাইভ ক্লাস
              </h2>
              <h2 className="hover:text-[#FF8C4B] hover:underline cursor-pointer">
                লাইভ ওয়ার্কশপ
              </h2>
              <h2 className="hover:text-[#FF8C4B] hover:underline cursor-pointer">
                জয়েন করুন এক্সপার্টদের টিমে
              </h2>
              <h2 className="hover:text-[#FF8C4B] hover:underline cursor-pointer">
                ব্লগ
              </h2>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl">যোগাযোগ</h2>

            <div className="flex flex-col gap-4 pt-6 text-lg font-semibold">
              <h2 className="flex items-center gap-2 cursor-pointer">
                <i class="fa-solid fa-phone"></i>
                <span className="hover:text-[#FF8C4B] hover:underline">
                  01781-611903
                </span>
              </h2>
              <h2 className="flex items-center gap-2  cursor-pointer">
                <i class="fa-regular fa-envelope"></i>
                <span className="hover:text-[#FF8C4B] hover:underline">
                  support@ostad.app
                </span>
              </h2>
              <h2 className="flex items-center gap-2 cursor-pointer">
                <i class="fa-solid fa-location-dot"></i>
                <span className="hover:text-[#FF8C4B] hover:underline">
                  Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2,
                  Dhaka-1212
                </span>
              </h2>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl">কোম্পানি</h2>

            <div className="flex flex-col gap-4 pt-6 text-lg font-semibold">
              <h2 className="hover:text-[#FF8C4B] hover:underline cursor-pointer">
                about us
              </h2>
              <h2 className="hover:text-[#FF8C4B] hover:underline cursor-pointer">
                Refund Policy
              </h2>
              <h2 className="hover:text-[#FF8C4B] hover:underline cursor-pointer">
                Privacy Policy
              </h2>
              <h2 className="hover:text-[#FF8C4B] hover:underline cursor-pointer">
                Terms and Conditions
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
