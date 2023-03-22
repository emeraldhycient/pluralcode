import React from "react";

function Card({ reason, index }) {
  const { title, title2, description, image, style, textStyle, textStyle2 } = reason;
  return (
    <div
      className="grid grid-cols-2 h-fit "
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div
        className={`${style}  flex justify-center items-left flex-col p-3 ${index % 2 === 0 ? "order-last rounded-r-[24px]" : "order-first rounded-l-[24px]"}`}
      >
        <h1 className={`${textStyle} font-semibold text-lg mb-3`}>{title}</h1>
        <h2 className={`${textStyle2} font-semibold text-[14px]`}>{title2}</h2>
        <p className="text-sm text-left mt-1 font-gilroyregular">
          {description}
        </p>
      </div>
      <div className="">
        <img src={image} alt="" className={`h-full  w-[80%] ${index % 2 === 0 ? " rounded-l-[24px]" : "rounded-r-[24px]"}`} />
      </div>
    </div>
  );
}

export default Card;
