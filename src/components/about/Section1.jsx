import React from "react";
import about2 from "../../assets/images/about2.png";

function Section1() {
  return (
    <section className=" py-10 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-9/12 lg:w-8/12 mx-auto h-full w-full">
        <div className="order-last md:order-first">
          <img src={about2} alt="" className="h-72 lg:h-96" srcset="" />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl md:text-3xl font-bold  font-gilroy md:text-center lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-tight	">
            We live and breath technology
          </h1>
          <p className="font-gilroyregular text-[16px] md:text-center lg:text-left  font-extralight text-[#232323] mb-4">
            We have the best hands in handling all software solutions. We offer
            Top notch technology solutions across all industries. Hire us!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section1;
