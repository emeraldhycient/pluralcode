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
        <div className="mx-auto order-last md:order-first flex justify-center items-center">
          <img src={exclusive} className="h-96" alt="" />
        </div>
        <div className="mt-6 md:mt-10">
          <h1 className="text-base md:text-lg font-bold  font-gilroy text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug px-2">
            Get a Personal Tech Tutor Within 24 Hours
          </h1>
          <p className="font-gilroyregular text-[#222057] text-left  font-extralight text-white mb-1 mx-3">
            Book a personal tutor. Get matched with an highly qualified tutor
            within 24hours and begin your exclusive learning on the go.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-12">
            <div className="shadow h-24 w-full rounded p-2 text-center">
              <h1 className="text-[#222057] text[18px] font-semibold mb-2">
                step 1
              </h1>
              <h6 className=" text-[14px]">Fill the Application</h6>
            </div>
            <div className="shadow h-24 w-full rounded p-2 text-center">
              <h1 className="text-[#222057] text[18px] font-semibold mb-2">
                step 2
              </h1>
              <h6 className=" text-[14px]">
                Get
                <br /> Contacted
              </h6>
            </div>
            <div className="shadow h-24 w-full rounded p-2 text-center">
              <h1 className="text-[#222057] text[18px] font-semibold mb-2">
                step 3
              </h1>
              <h6 className=" text-[14px]">Admission Starter Pack</h6>
            </div>
            <div className="shadow h-24 w-full rounded p-2 text-center">
              <h1 className="text-[#222057] text[18px] font-semibold mb-2">
                step 4
              </h1>
              <h6 className=" text-[14px]">
                Start
                <br /> Learning
              </h6>
            </div>
          </div>
          <div className="mt-10"></div>
          <GetStarted />
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;
