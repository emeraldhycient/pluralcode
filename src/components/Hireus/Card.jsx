import React from "react";

function Card({ reason }) {
  const { title, description, image, style, textStyle } = reason;
  return (
    <div className="grid grid-cols-2">
      <div
        className={`${style} h-40 md:h-[200px] flex justify-center items-center flex-col p-3`}
      >
        <h2 className={`${textStyle} font-semibold`}>{title}</h2>
        <p className="text-sm text-center mt-1 font-gilroyregular">
          {description}
        </p>
      </div>
      <div className="">
        <img src={image} alt="" className="h-full h-40 md:h-[200px] w-[80%]" />
      </div>
    </div>
  );
}

export default Card;
