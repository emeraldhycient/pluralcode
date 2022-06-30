import React from "react";
import Step from "./Step";

function Section2() {
  return (
    <div className="h-fit md:h-screen w-full w-screen pt-10 md:pt-0 bg-[#FFFDFA] pb-20 flex flex-col justify-center items-center">
      <h1 className="text-[30px] font-semibold text-center mb-2 md:mb-10 ">
        How it Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 w-11/12 md:w-10/12 mx-auto mt-8">
        <Step
          count={1}
          title="Fill The Application Form "
          description="Click the button above to fill the application."
        />
        <Step
          count={1}
          title="Meet Our Corporate 
          Training Team
          "
          description="Meet with our corporate who are on stand by to work through your application process"
        />
        <Step
          count={1}
          title="Get a Training 
          Schedule & Quote"
          description="You will get a training schedule along with the quote for your training program"
        />
        <Step
          count={1}
          title="Receive World-Class 
          Staff Training
          "
          description="You’re all Set. Enjoy the best of our corporate training program."
        />
      </div>
    </div>
  );
}

export default Section2;
