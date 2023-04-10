import { useState } from "react";
import CourseCard from "./CourseCard";

import ux from "../../assets/images/diploma/diploma1.svg"
import management from "../../assets/images/diploma/diploma2.svg"
import marketing from "../../assets/images/diploma/diploma3.svg"
import progr from "../../assets/images/diploma/diploma4.svg"


function Ourschool() {
  const [courses1, setCourses1] = useState([
    {
      image: ux,
      title: "Diploma in Product Mgt.",
      content: `Master the industry-standards and tools for Product Management.`,
      link: "https://wa.me/2349169190508?text=I%27m%20interested%20in%20your%20Product%20Management%20Diploma",
    },
    {
      image: management,
      title: "Diploma in Data Analytics ",
      content: `Advanced Analytics with a semester of Data Engineering or Data Science.`,
      link: "https://wa.me/2349120733972?text=I%27m%20interested%20in%20your%20Data%20Analytics%20Diploma",
    },
    {
      image: marketing,
      title: "Diploma in Cloud Dev.",
      content: `Master Cloud Computing and development with AWS and MS Azure.`,
      link: "https://wa.me/2348074511396?text=I%27m%20interested%20in%20your%20Cloud%20Computing%20Diploma",
    },
    {
      image: progr,
      title: "Diploma in software Dev.",
      content: `Master JS Based FullStack Development in a practical environment.`,
      link: "https://wa.me/2347040910513?text=I%27m%20interested%20in%20your%20Software%20Development%20Diploma",
    },

  ]);


  return (
    <section className="h-fit py-12 lg:py-36 w-screen bg-gray-50" id="schools">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-3xl md:text-[44px] font-bold text-[#222057] font-gilroy text-center w-full align-left mb-5 md:mb-7 leading-snug	">
          Diploma Programs
        </h1>
        <p className="font-gilroyregular text-[14px] font-extralight mb-16 w-[90%] md:w-[43%] mx-auto text-center">
Choose the Course you would like to learn and click the link underneath to chat with the Student Advisor and begin your enrollment        </p>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 md:w-11/12  mx-auto h-full w-full">
        {courses1.map((course) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </div>
     
    </section>
  );
}

export default Ourschool;
