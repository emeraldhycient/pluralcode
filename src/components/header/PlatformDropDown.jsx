import React from "react";

function PlatformDropDown() {
  return (
    <div className="">
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
