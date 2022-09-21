import React from "react";

function CustomButton({ children }) {
  return (
    <button className="bg-amber-500 text-[12px] text-white px-8 py-3 rounded w-[100%] mx-auto lg:mx-0 flex justify-center items-center">
      <a className="flex items-center">{children}</a>
    </button>
  );
}

export default CustomButton;
