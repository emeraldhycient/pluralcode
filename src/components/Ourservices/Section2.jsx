import React from "react";
import Step from "./Step";

function Section2() {
  return (
    <div className="h-fit lg:h-screen w-full w-screen pt-10 md:pt-0 bg-[#FFFDFA] pb-20 flex flex-col justify-center items-center">
      <h1 className="text-[30px] font-semibold text-center mb-2 md:mb-10 ">
        What We Do
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 mt-6 w-11/12 md:w-10/12 mx-auto mt-8">
        <Step
          title="Website Design"
          description="Build international standard website using the most recent front end and back end frame works."
        />
        <Step
          title="Application Development
          "
          description="Develop global standard applications
          "
        />
        <Step
          title="UI/UX Design"
          description="Build world Class user interfaces with excellent user experience."
        />
        <Step
          title="Data Science & Engineering
          "
          description="Become indispensable to any company with skills in Data science and engineering "
        />
      </div>
    </div>
  );
}

export default Section2;
