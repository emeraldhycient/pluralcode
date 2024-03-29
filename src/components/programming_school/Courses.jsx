import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import pr from "../../assets/images/Pr1.jpg";
import pr2 from "../../assets/images/Pr2.jpg";
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
        "Learn how to create international standard website and apps using the most recent front End frameworks of the day.",
      image: pr,
      duration: "28 weeks",
      link: "/schools/programming/frontend-development",
      level: "",
      mode: "",
    },

    {
      title: "FullStack Development",
      description:
        "Learn how to create international standard website and apps using the most recent front End frameworks of the day.",
      image: pr2,
      duration: "28 weeks",
      link: "/schools/programming/frontend-development",
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
