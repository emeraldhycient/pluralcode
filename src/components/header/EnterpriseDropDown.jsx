import React from "react";

function EnterpriseDropDown() {
  return (
    <div className="w-fit h-fit p-6 bg-white z-20  rounded-3xl hidden md:block relative shadow shadow-lg mx-auto">
      <ul className="w-full">
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/corporate-training">Corporate Trainings</a>
        </li>
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/schools/product/product-management">
            Custom Software Development
          </a>
        </li>
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/Hire-talent">Hire Our Talents</a>
        </li>
      </ul>
    </div>
  );
}

export default EnterpriseDropDown;
