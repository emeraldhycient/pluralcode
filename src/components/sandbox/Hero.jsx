import React from "react";
import sand1 from "../../assets/images/sand1.svg";
import sand2 from "../../assets/images/sand2.svg";

function Hero() {
  return (
    <section
      className="h-fit md:h-[68vh] lg:h-screen w-screen  flex flex-col justify-center items-center pt-4 pb-8 lg:py-20"
      style={{
        backgroundImage: `url(${sand1})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-6xl font-extrabold md:w-[40%] lg:mt-12 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#222057] to-[#F8991D] text-center">
        We Live To Make A Difference
      </h1>
      <img src={sand2} alt="" className="h-80 " />
    </section>
  );
}

export default Hero;
