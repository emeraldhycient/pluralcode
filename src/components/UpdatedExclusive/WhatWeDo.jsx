import React from "react";
import exclusive from "../../assets/images/updatedExclusive5.png";
import GetStarted from "./GetStarted";

function WhatWeDo() {
  return (
    <section className="h-fit w-11/12 mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold  font-gilroy text-center  w-full align-left text-[#222057] mb-6 lg:leading-snug	">
        What We Do{" "}
      </h1>

      <img src={exclusive} alt="" />
      <div className="md:w-6/12 mx-auto mt-10">
        <GetStarted />
      </div>
    </section>
  );
}

export default WhatWeDo;
