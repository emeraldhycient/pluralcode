import { useState } from "react";
import CourseCard from "./CourseCard";
import productdesign from "../../assets/images/productdesign.png";
import productmanagement from "../../assets/images/productmanagement.png";

function Courses() {
  const [courses, setCourses] = useState([
    {
      title: "Data Analytics",
      description:
        "Learn to build Financial models, forecast performances and perform Valuations for companies. Become industry ready in just 12 weeks.",
      image: productdesign,
      duration: "12weeks",
      start_date: "01/01/2020",
      link: "/schools/data/data-analysis",
      level: "beginner",
      mode: "physical",
    },
    {
      title: "Machine Learning",
      description:
        "Analyze and visualize data using Machine learning models. This course dives into the basics of machine learning using an approachable, and well-known programming language, Python.",
      image: productmanagement,
      duration: "16weeks",
      start_date: "01/01/2020",
      link: "/schools/data/machine-learning",
      level: "beginner",
      mode: "physical",
    },
  ]);

  return (
    <section className="mt-6 ">
      <center>
        <h1 className="text-[#222057] text-[40px] font-medium">
          Courses Available
        </h1>
      </center>
      <div className="w-11/12 md:w-9/12 mx-auto my-8">
        {courses.map((course) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </div>
    </section>
  );
}

export default Courses;
