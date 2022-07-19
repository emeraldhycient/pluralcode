import React from "react";

function PlatformDropDown() {
  return (
    <div className="w-fit h-fit p-6 bg-white z-20  rounded-3xl hidden md:block relative shadow shadow-lg mx-auto">
      <ul className="w-full">
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/sandbox">Pluralcode SandBox</a>
        </li>
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/webseries">Web Series</a>
        </li>
        <li className="font-gilroyregular text-[14px] my-1">
          <a href="/exclusive">Exclusive</a>
        </li>
      </ul>
    </div>
  );
}

export default PlatformDropDown;
