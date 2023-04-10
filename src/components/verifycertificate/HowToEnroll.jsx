import { useState } from "react";
import CourseCard from "./CourseCard";

function HowToEnroll() {

  return (
    <section className="h-fit py-12 lg:py-36 w-screen bg-gray-50" id="HowToEnroll">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-3xl md:text-[44px] font-bold  font-gilroy text-center w-full align-left text-[#222057] mb-12 lg:mb-20 leading-snug	">
          How To Enroll?
        </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  w-11/12 md:w-10/12  mx-auto h-full w-full">
        <div className='h-fit mb-3 mt-3  md:h-[397px] bg-[#222057] w-full md:w-[95%] rounded-[24px]  mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 md:py-3 shadow-[0px 0px 42px rgba(0, 0, 0, 0.32)]'>
          <div className="w-full">
            <h1 className="text-2xl font-medium text-white font-gilroy   mb-6 md:mb-8 leading-snug	">
              Free Advisory Session
            </h1>
            <h4
              className="my-1 font-gilroyregular text-[12px] text-left text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Select the course you are interested in and speak with the Student Advisor for 5 - 10 minutes to get all the relevant information about the program. After your session, you will be walked through the process of enrollment, payment plans, self-paced study pack and calendar for academic activities.            </h4>
          </div>

        </div>
        <div className="h-[270px] mt-3 mb-3  md:h-[397px] md:w-[95%] rounded-[30px] w-full mx-auto  px-1 md:px-0 py-4 md:py-0" id="howtoenrollimage">
          {/* <img src="" className="" alt="" /> */}
        </div>
        <div className='h-fit mb-3 mt-3  md:h-[397px] bg-[#F8991D] w-full md:w-[95%] rounded-[24px]  mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 md:py-3 shadow-[0px 0px 42px rgba(0, 0, 0, 0.32)]'>
          <div className="w-full ">
            <h1 className="text-2xl font-medium text-white font-gilroy   mb-6 md:mb-8 leading-snug	">
              Application & Assessment
            </h1>
            <h4
              className="my-1 font-gilroyregular text-[12px] text-left text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              After your initial onboarding, you may be required to take a background assessment test. This test is required to understand your current level of skill in your course of study and must be passed in order to continue your application. Assessment is not required when the advisor is satisfied with your current skill level or background on the subject. Once this is sufficiently addressed, student can move on to the final phase of enrollment.            </h4>
          </div>

        </div>
        <div className='h-fit mb-3 mt-3  md:h-[397px] bg-[#232323] w-full md:w-[95%] rounded-[24px]  mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 md:py-3 shadow-[0px 0px 42px rgba(0, 0, 0, 0.32)]'>
          <div className="w-full">
            <h1 className="text-2xl font-medium text-white font-gilroy   mb-6 md:mb-8 leading-snug	">
              Tuition & Documents.
            </h1>
            <h4
              className="my-1 font-gilroyregular text-[12px] text-left text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              The final stage of your enrollment is Tuition & Documents. An invoice will be generated with your tuition fee and payment plan reflected, you will be required to pay this as soon as possible in order not to stall your admission process. Once tuition is paid, we will require a verifiable ID (NIN, Drivers License, Passport etc), Proof of address and Reference/Emergency contact information to complete your KYC and fully admit you into the academy.            </h4>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HowToEnroll;
