import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import productdesign from "../../assets/images/productdesign.png";
import productmanagement from "../../assets/images/productmanagement.png";
import axios from "axios";

function Courses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://pluralcode.academy/pluralcode_payments/api/get_website_course_list"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [courses, setCourses] = useState([
    {
      title: "Front-End Development",
      description:
        "Learn Ui/Ux from scratch without writing a single code. Master how to design high fidelity interface with FIGMA, design journey mapping and empathize with users.",
      image: productdesign,
      duration: "28 weeks",
      link: "https://www.pluralcode.com/product-school/product-design",
      level: "beginner",
      mode: "physical",
    },
    {
      title: "Backend Development",
      description:
        "Become a professional product manager in 8 weeks. Learn how to gather users data, identify their needs and how it benefits them.",
      image: productmanagement,
      duration: "28 weeks",
      link: "https://www.pluralcode.com/product-school/product-design",
      level: "beginner",
      mode: "physical",
    },
    {
      title: "FullStack Development",
      description:
        "Become a professional product manager in 8 weeks. Learn how to gather users data, identify their needs and how it benefits them.",
      image: productmanagement,
      duration: "28 weeks",
      link: "https://www.pluralcode.com/product-school/product-design",
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
