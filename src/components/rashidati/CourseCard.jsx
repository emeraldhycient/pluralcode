import React from "react";
import useAnalyticsEventTracker from "../../services/analytics/useAnalyticsEventTracker";


function CourseCard({ course }) {
  const { image, title, content, link } = course;

  const gaEventTracker = useAnalyticsEventTracker('ads landing page');


  return (
    <a
      key={title}
      className="bg-white press_shadow  rounded-tl-3xl rounded-br-3xl p-6"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <img
        loading='lazy'
        src={`${image}`}
        alt="course1"
        className="w-full h-50 rounded-tl-3xl rounded-br-3xl"
      />
      <h1 className="text-lg font-bold text-[#222057] font-gilroy text-left w-full align-left text-[#232323] mb-2 mt-3 leading-snug	">
        {title}
      </h1>
      <p className="font-gilroyregular text-[14px] font-extralight">
        {content}
      </p>

      {/* <div className="mt-4">
        <button onClick={() => gaEventTracker('click', `clicked on speak with advisor on ${title}`)} className="bg-white  text-amber-500 text-white px-4 py-2 text-[12px] rounded w-fit flex justify-center items-center -ml-2">
          <a href={link ? link : ""} className="flex items-center text-amber-500">
            <img src="https://i.im.ge/2023/02/08/am3XyX.Vector.png" className="mr-1" alt="" />
            Speak to  Advisor
          </a>
        </button>
      </div> */}
    </a>
  );
}

export default CourseCard;
