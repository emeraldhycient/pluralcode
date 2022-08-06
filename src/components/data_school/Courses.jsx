import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import data1 from "../../assets/images/data1.jpg";
import data2 from "../../assets/images/data2.jpg";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([
    {
      title: "Data Analytics",
      description:
        "Learn to build Financial models, forecast performances and perform Valuations for companies. Become industry ready in just 12 weeks.",
      image: data1,
      duration: "12weeks",
      start_date: "01/01/2020",
      link: "/schools/data/data-analytics",
      level: "beginners",
      mode: "",
    },
    {
      title: "Data science",
      description:
        " Analyze and visualize data using data science tools.This course also dives into the basics of Data analytics and full fledged machine learning using an approachable, and well-known programming language, Python.",
      image: data2,
      duration: "20weeks",
      start_date: "01/01/2020",
      link: "/schools/data/data-science",
      level: "beginners",
      mode: "",
    },
  ]);

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
