import { useState } from "react";
import CourseCard from "./CourseCard";

function HowItWorks() {

  return (
    <section className="h-fit py-12 lg:py-36 w-screen bg-gray-50" id="howitworks">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-3xl md:text-[44px] font-bold  font-gilroy text-center w-full align-left text-[#222057] mb-12 lg:mb-20 leading-snug	">
          How It Works
        </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-7  w-11/12 md:w-10/12  mx-auto h-full w-full">

        <div className="col-span-3 h-[250px] mt-3 mb-3  md:h-[375px] md:w-[95%] rounded-[30px] w-full mx-auto  px-1 md:px-0 py-4 md:py-0" id="Howitworksdiploma">
          {/* <img src="" className="" alt="" /> */}
        </div>

        <div className=' col-span-4 h-fit mb-3 mt-3  md:h-[375px] bg-[#222057] w-full md:w-[95%] rounded-[24px]  mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 md:py-3 shadow-[0px 0px 42px rgba(0, 0, 0, 0.32)]'>
          <div className="w-full">
            <h1 className="text-2xl font-medium text-white font-gilroy   mb-6 md:mb-8 leading-snug	">
              2-Semester Intense Learning
            </h1>
            <h4
              className="my-1 font-gilroyregular text-[12px] text-left text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Your Tech Diploma is a 7-month intense academic exercise that is designed to cut through the noise and give you only industry-standard skills, experience and certification. Classes are taught by certified experts, demanding examinations every semester, real-life projects defense and compulsory internships. Tech Diploma is not an easy ride, it is designed only for those who want to become experts in their fields and go straight to work as a tech professional after their studies.            </h4>
          </div>

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-11  w-11/12 md:w-10/12  mx-auto h-full w-full">

        <div className='col-span-6 h-fit mb-3 mt-3  md:h-[375px] bg-[#F8991D] w-full md:w-[95%] rounded-[24px]  mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 md:py-3 shadow-[0px 0px 42px rgba(0, 0, 0, 0.32)]'>
          <div className="w-full ">
            <h1 className="text-2xl font-medium text-white font-gilroy   mb-6 md:mb-8 leading-snug	">
              Exams & Projects
            </h1>
            <h4
              className="my-1 font-gilroyregular text-[12px] text-left text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              You will be tested on everything including your current subjects, industry knowledge and practical projects. Your grades will be earned by your performance and will reflect as GPA in your transcript. You must reach the required threshold GPA of your program before you can graduate. Other things that will contribute to your GPA are your performances with the internships and extra-curricular activities. Your program is also broken into courses with their own credit units.            </h4>
          </div>

        </div>
        <div className='col-span-5 h-fit mb-3 mt-3  md:h-[375px] bg-[#232323] w-full md:w-[95%] rounded-[24px]  mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 md:py-3 shadow-[0px 0px 42px rgba(0, 0, 0, 0.32)]'>
          <div className="w-full">
            <h1 className="text-2xl font-medium text-white font-gilroy   mb-6 md:mb-8 leading-snug	">
              Internship & Career
            </h1>
            <h4
              className="my-1 font-gilroyregular text-[12px] text-left text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              A successful career is the end goal of your learning endeavors and we at Pluralcode understand this deeply. Our solution is to give you a ladder that takes you straight into the professional world. Networking opportunities, free advisory sessions, internationally recognized diploma, real portfolio,  mandatory internships and job recommendations. These are just some of the ways we ensure your post-graduation career path is paved.            </h4>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HowItWorks;
