import React from "react";
import Step from "./Step";

function Section2() {
  return (
    <div className=" w-full w-screen pt-10 md:pt-0 bg-[#F8F8FA] py-10 lg:py-20 flex flex-col justify-center items-center">
      <h1 className="text-[30px] font-semibold text-center mb-2 md:mb-10 ">
        Our Culture{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 w-11/12 md:w-10/12 mx-auto mt-8">
        <Step title="Speed" />
        <Step title="Ambition" />
        <Step title="Agile" />
        <Step
          title="Team work
          "
        />
      </div>
    </div>
  );
}

export default Section2;
