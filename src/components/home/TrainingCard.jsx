import React from "react";
import step from "../../assets/images/step.png";


function TrainingCard({ approach }) {
  const { title, content } = approach;

  return (
    <div className="bg-white h-68 rounded-lg w-full px-8 py-10 md:ml-3 press_shadow">
      <img
        src={step}
        className="h-12 w-12 mb-3"
        alt=""
        data-aos="fade-left"
        data-aos-duration="2000"
      />
      <h2
        className="text-base font-normal mt-1 font-gilroy text-left mb-2 "
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        {title}
      </h2>
      <h4
        className="my-1 font-gilroyregular text-[12px] text-left"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        {content}
      </h4>
    </div>
  );
}

export default TrainingCard;
