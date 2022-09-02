import React from "react";
import { FcSmartphoneTablet } from "react-icons/fc";

function BeforeFooter() {
  return (
    <div className="h-[80vh]">
      <div className="h-[30%] flex flex-col justify-center items-center">
        <h1 className="text-lg md:text-xl font-bold  font-gilroy text-center  w-full align-left text-[#222057] mb-6 lg:leading-snug	">
          Have more questions?
        </h1>
        <div className="flex items-center justify-center w-full mx-auto">
          <FcSmartphoneTablet size={30} color="#232323" />
          <p className="font-gilroyregular text-[16px] text-center  font-extralight text-[#232323]">
            Call or Whatsapp: +234 708 315 3185
          </p>
        </div>
      </div>
      <div className="bg-[#222057] h-[70%] flex flex-col justify-center items-center">
        <div className="w-10/12 md:w-4/12 mx-auto flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-extralight  font-gilroyregular  text-center  w-full align-left text-white mb-4 lg:leading-snug	">
            Become a Mentor
          </h1>
          <p className="font-gilroyregular text-[12px] text-center  font-extralight text-white mb-8">
            PluralCode exclusive program gives you access to a private tutor
            with quality one on one mentorship, fewer distractions, greater
            learning and focus.
          </p>
          <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded w-[80%] md:w-[50%]  mx-auto  flex justify-center items-center">
            <a
              href="https://pluralcode.academy/payment"
              className="flex items-center"
            >
              Apply
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeforeFooter;
