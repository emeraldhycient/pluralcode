import React from "react";
import cube from "../../assets/images/cube.svg";
import laptop from "../../assets/images/laptop1.svg";
import stack from "../../assets/images/stack.svg";

function PlatformDropDown() {
  return (
    <div className="">
      <ul className=" grid grid-cols-2 md:grid-cols-3 gap-3">
        <li className="font-gilroyregular text-[17px] my-1">
          <div className="flex items-center">
            <img src={cube} alt="" className="mr-3" />
            <a href="/sandbox">Pluralcode SandBox</a>
          </div>
          <p className="font-gilroyregular text-[14px] my-1">
            Access to tech education for less priviledged.
          </p>
        </li>
        <li className="font-gilroyregular text-[17px] my-1">
          <div className="flex items-center">
            <img src={laptop} alt="" className="mr-3" />{" "}
            <a href="/webseries">Web Series</a>
          </div>
          <p className="font-gilroyregular text-[14px] my-1">
            Access to tech education for less priviledged.
          </p>
        </li>
        <li className="font-gilroyregular text-[17px] my-1">
          <div className="flex items-center">
            <img src={stack} alt="" className="mr-3" />
            <a href="/exclusive">Exclusive</a>
          </div>
          <p className="font-gilroyregular text-[14px] my-1">
            Access to tech education for less priviledged.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default PlatformDropDown;
