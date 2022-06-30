import React from "react";

function Outline({ course }) {
  return (
    <div className="bg-[#F8991D] h-72 w-full p-6 mb-4 rounded-lg">
      <div className="grid grid-cols-6 gap-2">
        <img src={course.icon} alt="" />
        <div className="col-span-5">
          <h1>week {course.week}</h1>
          <ul className="mt-4">
            {course.lessons.map((lesson, i) => (
              <li className="text-sm text-gray-400 mb-1" key={i}>
                . {lesson}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Outline;
