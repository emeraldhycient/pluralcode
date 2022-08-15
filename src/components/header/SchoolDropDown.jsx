import React from "react";

function SchoolDropDown() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 p-0 m-0 md:p-8 gap-5">
      <div className="col-span-3">
        <h1 className="text-[20px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
          Schools
        </h1>
        <div className=" grid grid-cols-2 md:grid-cols-2">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
              <a href="/schools/product">Product School</a>
            </h1>
            <ul className="w-full">
              <li className="font-gilroyregular text-[14px] my-1 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>

                <a href="/schools/product/product-design">Product Design</a>
              </li>
              <li className="font-gilroyregular text-[14px] my-1 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/product/product-management">
                  Product Management
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
              <a href="/schools/data">Data School</a>
            </h1>
            <ul className="w-full">
              <li className="font-gilroyregular text-[14px] my-1 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/data/data-analytics">Data Analytics</a>
              </li>
              <li className="font-gilroyregular text-[14px] my-1 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/data/data-science">Data science</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center flex-col mt-5 md:mt-5">
            <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
              <a href="/schools/programming">Programming School</a>
            </h1>
            <ul className="w-full">
              <li className="font-gilroyregular text-[14px] my-1 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/programming/frontend-development">
                  Front-End Development
                </a>
              </li>

              <li className="font-gilroyregular text-[14px] my-1 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/programming/fullstack-development">
                  Fullstack Development
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center flex-col mt-5 md:mt-5">
            <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
              <a href="/schools/cloud">Cloud School</a>
            </h1>
            <ul className="w-full">
              <li className="font-gilroyregular text-[14px] my-1 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/cloud/azure">Cloud Computing (MS Azure)</a>
              </li>
              <li className="font-gilroyregular text-[14px] my-1 flex items-center">
                <div className="h-3 w-3 rounded-full mr-2"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <h1 className="text-[20px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
          Top Courses
        </h1>
        <ul className="w-full">
          <li className="font-gilroyregular text-[14px] my-1 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/data/data-analytics">Data Analytics</a>
          </li>
          <li className="font-gilroyregular text-[14px] my-1 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/data/data-science">Data science</a>
          </li>
          <li className="font-gilroyregular text-[14px] my-1 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/programming/fullstack-development">
              Fullstack Development
            </a>
          </li>
          <li className="font-gilroyregular text-[14px] my-1 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/product/product-management">Product Management</a>
          </li>{" "}
          <li className="font-gilroyregular text-[14px] my-1 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/product/product-design">UI/UX Design</a>
          </li>
          <li className="font-gilroyregular text-[14px] my-1 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/cloud/azure">Cloud Computing (MS Azure)</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SchoolDropDown;
