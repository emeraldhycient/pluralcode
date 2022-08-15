import React from "react";
import cube from "../../assets/images/cube.svg";
import laptop from "../../assets/images/laptop1.svg";
import stack from "../../assets/images/stack.svg";

function PlatformDropDown() {
  return (
    <ul className="md:w-[700px] flex flex-wrap md:flex-nowrap	">
      <li className="font-gilroyregular text-[17px] my-1 md:w-[80%] mx-1">
        <div className="flex items-center">
          <img src={cube} alt="" className="mr-3" />
          <a href="/sandbox">Pluralcode SandBox</a>
        </div>
        <p className="font-gilroyregular text-[14px] my-1 md:border-b border-gray-200 pb-1 md:pb-3">
          Access to tech education for less priviledged.
        </p>
        <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-4 md:mb-2 mt-5  border-b md:border-0 border-gray-200 pb-4 md:pb-1">
          <a href="/sandbox">What is Sandbox?</a>
        </h1>
      </li>
      <li className="font-gilroyregular text-[17px] my-1 md:w-[80%] mx-1">
        <div className="flex items-center">
          <img src={laptop} alt="" className="mr-3" />{" "}
          <a href="/webseries">Web Series</a>
        </div>
        <p className="font-gilroyregular text-[14px] my-1 md:border-b border-gray-200 pb-1 md:pb-3">
          Access to tech education for less priviledged.
        </p>
        <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-4 md:mb-2 mt-5  border-b md:border-0 border-gray-200 pb-4 md:pb-1">
          <a href="/webseries">What is Web Series?</a>
        </h1>
      </li>
      <li className="font-gilroyregular text-[17px] my-1 md:w-[80%] mx-1">
        <div className="flex items-center">
          <img src={stack} alt="" className="mr-3" />
          <a href="/exclusive">Exclusive</a>
        </div>
        <p className="font-gilroyregular text-[14px] my-1 md:border-b border-gray-200 pb-1 md:pb-3">
          Access to tech education for less priviledged.
        </p>
        <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-4 md:mb-2 mt-5 pb-4 md:pb-1">
          <a href="/exclusive">What is Pluralcode Exclusive?</a>
        </h1>
      </li>
    </ul>
  );
}

export default PlatformDropDown;
