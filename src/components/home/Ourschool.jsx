import { useState } from "react";
import course1 from "../../assets/images/course1.png";
import course2 from "../../assets/images/course2.png";
import course3 from "../../assets/images/course3.png";
import course5 from "../../assets/images/course5.png";
import CourseCard from "./CourseCard";

function Ourschool() {
  const [courses, setCourses] = useState([
    {
      image: course1,
      title: "Product School",
      content: `Launch a career in Product Design  and Product Management.`,
      link: "schools/product",
    },
    {
      image: course5,
      title: "            Data School      ",
      content: `Master data manipulation, analytics & machine learning.`,
      link: "schools/data",
    },
    {
      image: course3,
      title: "Programming School",
      content: `Learn to build amazing websites & apps using mordern  frameworks.`,
      link: "schools/programming",
    },
    {
      image: course2,
      title: "Cloud School",
      content: `Understand cloud engineering & devops skills for professional use.`,
      link: "schools/cloud",
    },
  ]);

  return (
    <section className="h-fit py-12 lg:py-36 w-screen bg-gray-50" id="schools">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-4xl font-medium text-[#222057] font-gilroy text-center w-full align-left text-[#232323] mb-12 lg:mb-20 leading-snug	">
          Our Schools
        </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-11/12 md:w-11/12  mx-auto h-full w-full">
        {courses.map((course) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </div>
    </section>
  );
}

export default Ourschool;
