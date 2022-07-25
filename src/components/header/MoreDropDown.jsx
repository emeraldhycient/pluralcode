import React from "react";

function MoreDropDown() {
  return (
    <div className="w-fit h-fit p-6 bg-white z-20  rounded-3xl hidden md:block relative shadow shadow-lg mx-auto">
      <ul className="w-full">
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/about">Why Pluralcode</a>
        </li>
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/schools/product/product-management">
            Talk to Student Advisor{" "}
          </a>
        </li>
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/advisor">Become a Mentor</a>
        </li>
      </ul>
    </div>
  );
}

export default MoreDropDown;
