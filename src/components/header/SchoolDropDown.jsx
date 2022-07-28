import React from "react";

function SchoolDropDown() {
  return (
    <div className="">
      <div className="grid grid-cols-3 p-8">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
            <a href="/schools/product">Product School</a>
          </h1>
          <ul className="w-full">
            <li className="font-gilroyregular text-[14px] my-1">
              <a href="/schools/product/product-design">Product Design</a>
            </li>
            <li className="font-gilroyregular text-[14px] my-1">
              <a href="/schools/product/product-management">
                Product Management
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
            <a href="/schools/data">Data School</a>
          </h1>
          <ul className="w-full">
            <li className="font-gilroyregular text-[14px] my-1">
              <a href="/schools/data/data-analysis">Data Analytics</a>
            </li>
            <li className="font-gilroyregular text-[14px] my-1">
              <a href="/schools/data/machine-learning">Machine Learning</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
            <a href="/schools/programming">Programming School</a>
          </h1>
          <ul className="w-full">
            <li className="font-gilroyregular text-[14px] my-1">
              <a href="/schools/programming/frontend-development">
                Front-End Development
              </a>
            </li>

            <li className="font-gilroyregular text-[14px] my-1">
              <a href="/schools/programming/backend-development">
                Back-End Development
              </a>
            </li>
            <li className="font-gilroyregular text-[14px] my-1">
              <a href="/schools/programming/fullstack-development">
                fullstack Development
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolDropDown;
