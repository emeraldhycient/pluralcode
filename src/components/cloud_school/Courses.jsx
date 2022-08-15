import { useState } from "react";
import CourseCard from "./CourseCard";
import product_des from "../../assets/images/product_des.jpg";
import product_mgt from "../../assets/images/product_mgt.jpg";

function Courses() {
  const [courses, setCourses] = useState([
    {
      title: "Cloud Computing",
      description:
        "Learn to use popular Cloud platforms, understand Cloud computing concepts and technologies apply virtualization and its use in Infrastructure development.",
      image: product_mgt,
      duration: "16 weeks",
      start_date: "01/01/2020",
      link: "/schools/cloud/azure",
      level: "",
      mode: "",
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
