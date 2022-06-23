import React from "react";

function TrainingCard({ approach }) {
  const { image, title, content } = approach;

  return (
    <div
      className="bg-white shadow shadow-xl  rounded-lg  pt-4 pl-4 pb-4 h-48"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="h-full">
          <img src={image} alt="" className="h-full w-full rounded-lg" />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl font-medium text-left w-full align-left text-[#222057] mb-2 ">
            {title}
          </h1>
          <p className="text-left text-xs text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default TrainingCard;
