import React from "react";
import sand1 from "../../assets/images/sand1.jpeg";
import sand2 from "../../assets/images/sand2.jpeg";
import sand3 from "../../assets/images/sand3.jpeg";

function Captures() {
  return (
    <div className="h-fit md:h-fit lg:h-screen w-full flex justify-center items-center flex-col">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full w-10/12 mx-auto">
        <div className="">
          <img src={sand1} alt="" className="w-full h-32  lg:h-56" />
        </div>
        <div className="">
          <img src={sand2} alt="" className="w-full h-32  lg:h-56" />
        </div>
        <div className="">
          <img src={sand3} alt="" className="w-full h-32  lg:h-56" />
        </div>
      </div>
      <div className="md:w-[60%] lg:w-[60%] mx-auto flex flex-col justify-center items-center mt-12 px-3">
        <h1 className="text-xl font-bold mb-4">Our Mission</h1>
        <p>
          Our mission at PluralCode is to create a major impact in raising the
          next generation of Africa’s tech geniuses.
        </p>
      </div>
    </div>
  );
}

export default Captures;
