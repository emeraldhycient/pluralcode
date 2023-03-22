import React from "react";

function SchoolDropDown() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 p-0 m-0 md:p-8 gap-5">
      <div className="col-span-3">
        <h1 className="text-[25px] font-bold  font-gilroyregular  w-full  text-[#222057] mb-2 md:mb-4 ">
          Schools
        </h1>
        <div className=" grid grid-cols-2 md:grid-cols-2 mt-3 gap-x-3 md:gap-x-8">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-2 ">
              <a href="/schools/product">Product School</a>
            </h1>
            <ul className="w-full">
              <li className="font-gilroyregular text-[14px] my-3 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>

                <a href="/schools/product/product-design">Product Design</a>
              </li>
              <li className="font-gilroyregular text-[14px] my-3 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/product/product-management">
                  Product Management
                </a>
              </li>
              <li className="font-gilroyregular text-[14px] my-3 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/cloud/Agile-Product-Management">Agile Product Management</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-2 ">
              <a href="/schools/data">Data School</a>
            </h1>
            <ul className="w-full">
              <li className="font-gilroyregular text-[14px] my-3 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/data/data-analytics">Data Analytics</a>
              </li>
              <li className="font-gilroyregular text-[14px] my-3 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/data/data-science">Data science</a>
              </li>
              <li className="font-gilroyregular text-[14px] my-3 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/data/data-engineering">Data Engineering</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center flex-col mt-5 md:mt-5">
            <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-2 ">
              <a href="/schools/programming">Programming School</a>
            </h1>
            <ul className="w-full">
              <li className="font-gilroyregular text-[14px] my-3 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/programming/frontend-development">
                  FrontEnd Development
                </a>
              </li>

              <li className="font-gilroyregular text-[14px] my-3 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <a href="/schools/programming/fullstack-development">
                  Fullstack Development
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center flex-col mt-5 md:mt-5">
            <h1 className="text-[16px] font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-2 ">
              <a href="/schools/cloud">Cloud School</a>
            </h1>
            <ul className="w-full">
              <li className="font-gilroyregular text-[14px] my-3 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 ml-2 mr-2"></div>
                <a href="/schools/cloud/azure">
                  Cloud Computing <span className="hidden">(MS Azure)</span>
                </a>
              </li>
              <li className="font-gilroyregular text-[14px] my-3 flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 ml-2 mr-2"></div>
                <a href="/schools/cloud/azure">DevOps</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <h1 className="text-[25px] font-bold  font-gilroyregular  w-full  text-[#222057] mb-2 md:mb-4 ">
          Top Courses
        </h1>
        <ul className="w-full mt-3">
          <li className="font-gilroyregular text-[14px] my-3 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/data/data-analytics">Data Analytics</a>
          </li>
          <li className="font-gilroyregular text-[14px] my-3 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/data/data-science">Data science</a>
          </li>
          <li className="font-gilroyregular text-[14px] my-3 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/programming/fullstack-development">
              Fullstack Development
            </a>
          </li>
          <li className="font-gilroyregular text-[14px] my-3 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/product/product-management">Product Management</a>
          </li>{" "}
          <li className="font-gilroyregular text-[14px] my-3 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/product/product-design">UI/UX Design</a>
          </li>
          <li className="font-gilroyregular text-[14px] my-3 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/cloud/azure">Cloud Computing (MS Azure)</a>
          </li>
          <li className="font-gilroyregular text-[14px] my-3 flex items-center">
            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
            <a href="/schools/cloud/Agile-Product-Management">Agile Product Management</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SchoolDropDown;
