import { useState } from "react";
import CourseCard from "./CourseCard";

function Why() {

  return (
    <section className="h-fit py-12 lg:py-36 w-screen bg-gray-50" id="why">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-4xl font-medium  font-gilroy text-center w-full align-left text-[#222057] mb-12 lg:mb-20 leading-snug	">
          WHY PLURALCODE?
        </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  w-11/12 md:w-10/12  mx-auto h-full w-full">
        <div className='h-fit mb-3 mt-3  md:h-[397px] bg-[#222057] w-full md:w-[95%] rounded-[24px]  mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 md:py-3 shadow-[0px 0px 42px rgba(0, 0, 0, 0.32)]'>
          <div className="w-full">
            <h1 className="text-2xl font-medium text-white font-gilroy   mb-6 md:mb-8 leading-snug	">
              Flexible Learning
            </h1>
            <h4
              className="my-1 font-gilroyregular text-[12px] text-left text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Students can opt-in for our Onsite classes, virtual classes as well as Exclusive, One-on-One Mentorship. At Pluralcode we understand that you often have work, school and other pursuits to deal with and so we have structured program options to adapt to your specific needs and schedule. Contact any of our student advisors to find out how this works and how you can take advantage of it to up-skill for your ‘borderless career’ while you work or school.            </h4>
          </div>

        </div>
        <div className="h-[270px] mt-3 mb-3  md:h-[397px] md:w-[95%] rounded-[30px] w-full mx-auto  px-1 md:px-0 py-4 md:py-0" id="why-certificate-course">
          {/* <img src="" className="" alt="" /> */}
        </div>
        <div className='h-fit mb-3 mt-3  md:h-[397px] bg-[#F8991D] w-full md:w-[95%] rounded-[24px]  mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 md:py-3 shadow-[0px 0px 42px rgba(0, 0, 0, 0.32)]'>
          <div className="w-full ">
            <h1 className="text-2xl font-medium text-white font-gilroy   mb-6 md:mb-8 leading-snug	">
              Career Labs
            </h1>
            <h4
              className="my-1 font-gilroyregular text-[12px] text-left text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Your career journey starts right now! and we mean that. Our free career advisory session is available to you right away at the click of a button, and after you resume classes, you are exposed to an occasional schedule of activities; mock interviews, capstone projects, career coaching sessions etc all designed to prepare you for work in your specified field. Our top graduates are also added to the school’s opportunity pool from which our hiring partners recruit occasionally.            </h4>
          </div>

        </div>
        <div className='h-fit mb-3 mt-3  md:h-[397px] bg-[#232323] w-full md:w-[95%] rounded-[24px]  mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 md:py-3 shadow-[0px 0px 42px rgba(0, 0, 0, 0.32)]'>
          <div className="w-full">
            <h1 className="text-2xl font-medium text-white font-gilroy   mb-6 md:mb-8 leading-snug	">
              Industry Validation
            </h1>
            <h4
              className="my-1 font-gilroyregular text-[12px] text-left text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              As an internationally Accredited tech academy, Pluralcode makes a point to bring in only the best skilled professionals as mentors, not theorists, but practitioners who play a leading role in major companies and industry at large. This as well as the Pluralcode Certificate will validate your skill and readiness for your big jump into the tech space both locally and internationally. We have invested years into creating standards that put you in the forefront of competence.            </h4>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Why;
