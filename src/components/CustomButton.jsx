import React from "react";

function CustomButton({ children, link }) {
  return (
    <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded w-[100%] mx-auto lg:mx-0 flex justify-center items-center">
      {link ? <a href={`${link}`} className="flex items-center">{children}</a> : <a className="flex items-center">{children}</a>}
    </button>
  );
}

export default CustomButton;
