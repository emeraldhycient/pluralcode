import { useState } from "react";
import CourseCard from "./CourseCard";

import ux from "../../assets/images/certificate-course/ui:ux.svg"
import management from "../../assets/images/certificate-course/management.svg"
import marketing from "../../assets/images/certificate-course/marketing .svg"
import progr from "../../assets/images/certificate-course/progr.svg"
import front from "../../assets/images/certificate-course/front.svg"
import cloud from "../../assets/images/certificate-course/cloud.svg"
import data from "../../assets/images/certificate-course/data.svg"
import data2 from "../../assets/images/certificate-course/data2.svg"
import data3 from "../../assets/images/certificate-course/data3.svg"

function Ourschool() {
  // const [courses1, setCourses1] = useState([
  //   {
  //     image: ux,
  //     title: "Product Design (UI / UX)",
  //     content: `Learn the principles of Product Design, User Research and Interface Design.`,
  //     link: "https://wa.me/2347083153185?text=I'm%20interested%20in%20your%20Product%20Design%20Course",
  //   },
  //   {
  //     image: management,
  //     title: "Product Managment",
  //     content: `Master Product Management through our 8-week Masterclass.`,
  //     link: "https://wa.me/2349169190508?text=I'm%20interested%20in%20your%20Product%20Management%20Course",
  //   },
  //   {
  //     image: "https://i.im.ge/2023/03/21/DfPrcG.image-103.png",
  //     title: "Agile Product Management",
  //     content: `Master Agile in Product Management in just 12-week then become a Pro.`,
  //     link: "https://wa.me/2347040910513?text=I'm%20interested%20in%20your%20Software%20Development%20Course",
  //   },
  //   {
  //     image: progr,
  //     title: "Full-Stack Development",
  //     content: `Master JS Based FullStack Development in a practical environment.`,
  //     link: "https://wa.me/2347040910513?text=I'm%20interested%20in%20your%20Software%20Development%20Course",
  //   },

  // ]);

  // const [courses2, setCourses2] = useState([
  //   {
  //     image: front,
  //     title: "Front-End Development",
  //     content: `Master Web Development through React, Bootstrap and others.`,
  //     link: "https://wa.me/2347040910513?text=I'm%20interested%20in%20your%20Software%20Development%20Course",
  //   },
  //   {
  //     image: cloud,
  //     title: "Cloud Computing",
  //     content: `Become a Cloud Computing Expert through our 16-20 weeks program.`,
  //     link: "https://wa.me/2348074511396?text=I'm%20interested%20in%20your%20Cloud%20Computing%20Course",
  //   },
  //   {
  //     image: data,
  //     title: "Data Analytics",
  //     content: `Become a Professional Data Analyst with mastery of modern tools.`,
  //     link: "https://wa.me/2349120733972?text=I'm%20interested%20in%20your%20Data%20Analytics%20Course",
  //   },
  // ])

  const [courses3, setcourses3] = useState([
    {
      image: data2,
      title: "Product Design (UI / UX)",
      content: `Learn Ui/Ux from scratch without writing a single code. Master how to design high fidelity interface with FIGMA, design journey mapping and empathize with users.`,
      link: "https://wa.me/2348131529862?text=I'm%20interested%20in%20your%20Data%20Science%20Course",
    },
    {
      image: data3,
      title: "Software Dev (Front-End)",
      content: `Learn how to create international standard website and apps using the most recent front End frameworks of the day.`,
      link: "https://wa.me/2348131529862?text=I'm%20interested%20in%20your%20Data%20Engineering%20Course",
    }
  ])

  return (
    <section className="h-fit py-12 lg:py-36 w-screen bg-gray-50" id="schools">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-3xl md:text-[44px]  font-medium text-[#222057] font-gilroy text-center w-full align-left mb-5 md:mb-7 leading-snug	">
          Scholarship Courses List
        </h1>
        <p className="font-gilroyregular text-[14px] font-extralight mb-16 w-[90%] md:w-[43%] mx-auto text-center">
          The scholarship fund covers a 12 weeks virtual class in product design and Front end web development
        </p>
      </center>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 md:w-11/12  mx-auto h-full w-full">
        {courses1.map((course) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-8/12 mx-auto  h-full w-full mt-6">
        {courses2.map((course) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 md:w-11/12  mx-auto h-full w-full mt-6">
        <div></div>
        {courses3.map((course) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </div>
    </section>
  );
}

export default Ourschool;
