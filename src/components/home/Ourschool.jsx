import { useState } from "react";
import course1 from "../../assets/images/course1.png";
import course2 from "../../assets/images/course2.png";
import course3 from "../../assets/images/course3.png";
import CourseCard from "./CourseCard";

function Ourschool() {
  const [courses, setCourses] = useState([
    {
      image: course1,
      title: "Product School",
      content: `Our Product school has been designed to help students launch a successful career in product design (UI/UX) and Product management.`,
      link: "https://www.google.com",
    },
    {
      image: course2,
      title: "            Data School      ",
      content: `   Our data school trains and prepares students for careers in Data Analytics/ Science. Build expertise in data manipulation, visualization, predictive analytics, machine learning.`,
      link: "https://www.google.com",
    },
    {
      image: course3,
      title: "Programming School",
      content: `  PluralCode provides a 16 weeks, cutting-edge, full-time, and accessible web development course to help you upskill or quickly change careers.`,
      link: "https://www.google.com",
    },
  ]);

  return (
    <section className="h-fit py-12 lg:py-36 w-screen bg-gray-50">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-4xl font-medium text-[#222057] font-gilroy text-center w-full align-left text-[#232323] mb-12 lg:mb-20 leading-snug	">
          Our Schools
        </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-11/12 md:w-9/12  mx-auto h-full w-full">
        {courses.map((course) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </div>
    </section>
  );
}

export default Ourschool;
