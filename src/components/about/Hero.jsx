import React from "react";
import about from "../../assets/images/about.png";

function Hero() {
  return (
    <section className="h-fit md:h-[65vh] lg:h-[100vh] w-screen pt-4 lg:pt-12  flex flex-col justify-center items-center">
      <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto text-center">
        <h1
          className="text-4xl md:text-5xl font-bold  font-gilroy  w-full align-left text-[#222057] mb-4 leading-relaxed	  md:leading-tight text-center"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Building <span className="text-[#F8991D]">Solutions</span> For Global
          Impact
        </h1>
        <p
          className="font-gilroyregular text-[16px] text-center  font-extralight text-[#232323] mb-8"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Your employees deserve the best training programs out there. Our
          corporate training program is designed to educate employees.
        </p>
      </div>
      <div
        className="h-60 md:h-[48%] w-full"
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
}

export default Hero;
