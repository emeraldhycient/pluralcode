import React from "react";

function MoreDropDown() {
  return (
    <div className="">
      <ul className="w-full">
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/about">Why Pluralcode</a>
        </li>
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/advisors">Talk to Student Advisor </a>
        </li>
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/mentor">Become a Mentor</a>
        </li>
      </ul>
    </div>
  );
}

export default MoreDropDown;
