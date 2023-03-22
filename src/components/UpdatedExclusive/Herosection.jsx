import React from "react";
import exclusive from "../../assets/images/updatedExclusive1.png";
import Header from "../Header2";
import GetStarted from "./GetStarted";

function Herosection() {
  return (
    <div className="">
      <div className="h-[75vh] bg-[#222057]">
        <Header />
        <div
          className="w-full md:w-6/12 mx-auto h-full flex flex-col justify-center items-left text-left w-full align-left "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="text-4xl md:text-5xl font-bold  font-gilroy text-center  w-full align-left text-white mb-4 lg:leading-snug	">
            Get A <span className="text-amber-500">Private</span> Tutor &
            <span className="text-amber-500">
              <br className="hidden lg:block" />
              Learn
            </span>{" "}
            At Your Pace
          </h1>
          <p className="font-gilroyregular text-[16px] text-center  font-extralight text-white mb-8">
            PluralCode Exclusive program gives you access to a private tutor for
            high quality one-on-one mentorship, fewer distractions and a
            flexible schedule to meet your needs.
          </p>
          <GetStarted />
        </div>
      </div>
      <div className="-mt-10">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
}

export default Herosection;
