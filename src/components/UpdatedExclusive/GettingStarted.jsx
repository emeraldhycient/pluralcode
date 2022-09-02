import React from "react";
import exclusive from "../../assets/images/updatedExclusive4.png";
import GetStarted from "./GetStarted";

function GettingStarted() {
  const Card = ({ title, desc }) => (
    <div className="shadow h-24 w-full rounded p-2 text-center">
      <h1 className="text-[#222057] text[18px] font-semibold mb-2">{title}</h1>
      <h6 className=" text-[14px]">{desc}</h6>
    </div>
  );

  return (
    <section className="h-fit md:h-[50vh] lg:h-[100vh] py-16">
      <h1 className="text-2xl md:text-3xl font-bold  font-gilroy text-center  w-full align-left text-[#222057] mb-4 lg:leading-snug	">
        How To get Started{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-10/12 mx-auto">
        <div className="mx-auto order-last md:order-first">
          <img src={exclusive} className="h-96" alt="" />
        </div>
        <div className="mt-6 md:mt-10">
          <h1 className="text-base md:text-lg font-bold  font-gilroy text-center  w-full align-left text-[#222057] mb-4 lg:leading-snug	px-12">
            Get a Personal Tech Tutor Within 24 Hours
          </h1>
          <p className="font-gilroyregular text-[#222057] text-center  font-extralight text-white mb-1 mx-3">
            Book a personal tutor. Get matched with an highly qualified tutor
            within 24hours and begin your exclusive learning on the go.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <Card title="step 1" desc="Fill the Application" />
            <Card title="step 2" desc="Get Contacted" />
            <Card title="step 3" desc="Admission Starter Pack" />
            <Card title="step 4" desc="Start Learning" />
          </div>
          <div className="mt-10"></div>
          <GetStarted />
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;
