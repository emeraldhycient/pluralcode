import React from "react";

function CourseCard({ course }) {
  const { image, title, content, link } = course;

  return (
    <div
      key={title}
      className="bg-white shadow  rounded-tl-3xl rounded-br-3xl p-6"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <img
        src={image}
        alt="course1"
        className="w-full h-50 rounded-tl-3xl rounded-br-3xl"
      />
      <h1 className="text-lg font-bold text-[#222057] font-gilroy text-left w-full align-left text-[#232323] mb-2 mt-3 leading-snug	">
        {title}
      </h1>
      <p className="font-gilroyregular text-[16px] font-extralight">
        {content}
      </p>

      <div className="mt-4">
        <a href={link ? link : ""} className="text-amber-500 font-bold text-sm">
          View Course
        </a>
      </div>
    </div>
  );
}

export default CourseCard;
