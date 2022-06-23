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
      content: `  Our Product School allows you to master professional product and
      design-based skills ranging from UI Design, UX Research & Product
      Management.`,
      link: "https://www.google.com",
    },
    {
      image: course2,
      title: "            Data School      ",
      content: `     Master the most attractive field of the 21st century. Build
      expertise in Data manipulation, Analytics, Visualization, Predictive
      analytics and Machine Learning`,
      link: "https://www.google.com",
    },
    {
      image: course3,
      title: "Programming School",
      content: `  Learn to build scalable applications with modern tools. Master
      Full-Stack Development and Mobile Apps Development.`,
      link: "https://www.google.com",
    },
  ]);

  return (
    <section className="h-fit py-36 w-screen bg-gray-50">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-4xl font-medium text-[#222057] font-gilroy text-center w-full align-left text-[#232323] mb-20 leading-snug	">
          Our Schools
        </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-11/12 md:w-9/12  mx-auto h-full w-full">
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </section>
  );
}

export default Ourschool;
