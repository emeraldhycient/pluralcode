import React from "react";

function TrainingCard({ approach }) {
  const { image, title, content } = approach;

  return (
    <div
      className="bg-white shadow shadow-[0px -7.42184px 16.7347px -1.85539px rgba(16, 24, 40, 0.05), 0px 2.96863px 67.7755px -2.22647px rgba(16, 24, 40, 0.05)]  rounded-lg  pt-4 pl-4 pb-4 "
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="grid grid-cols-2 gap-2 h-full">
        <img src={image} alt="" className=" w-[90%] rounded-lg" />
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl font-medium text-left w-full align-left text-[#222057] mb-2 ">
            {title}
          </h1>
          <p className="text-left text-xs text-gray-600 mx-2">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default TrainingCard;
