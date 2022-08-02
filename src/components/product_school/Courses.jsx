import { useState } from "react";
import CourseCard from "./CourseCard";
import product_des from "../../assets/images/product_des.jpg";
import product_mgt from "../../assets/images/product_mgt.jpg";

function Courses() {
  const [courses, setCourses] = useState([
    {
      title: "Product Design",
      description:
        "Learn Ui/Ux from scratch without writing a single code. Master how to design high fidelity interface with FIGMA, design journey mapping and empathize with users.",
      image: product_des,
      duration: "12 weeks",
      start_date: "01/01/2020",
      link: "/schools/product/product-design",
      level: "beginner",
      mode: "physical",
    },
    {
      title: "Product Management",
      description:
        "Become a professional product manager in 8 weeks. Learn how to gather users data, identify their needs and how it benefits them.",
      image: product_mgt,
      duration: "8weeks",
      start_date: "01/01/2020",
      link: "/schools/product/product-management",
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
