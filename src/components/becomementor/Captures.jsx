import React from "react";
import sand1 from "../../assets/images/sand1.jpeg";
import sand2 from "../../assets/images/sand2.jpeg";
import sand3 from "../../assets/images/sand3.jpeg";
import mentor5 from "../../assets/images/mentor5.png";

function Captures() {
  return (
    <div className="h-fit md:h-fit lg:h-screen w-full flex justify-center items-center flex-col py-10 md:py-0">
      <img
        src={mentor5}
        alt=""
        className="w-full h-32  lg:h-[368px]"
        data-aos="fade-right"
        data-aos-duration="2000"
      />

      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full w-10/12 mx-auto">
        <div className="">
          <img src={sand1} alt="" className="w-full h-32  lg:h-56" />
        </div>
        <div className="">
          <img src={sand2} alt="" className="w-full h-32  lg:h-56" />
        </div>
        <div className="">
          <img src={sand3} alt="" className="w-full h-32  lg:h-56" />
        </div>
      </div> */}
    </div>
  );
}

export default Captures;
