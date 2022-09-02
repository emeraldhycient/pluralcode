import React from "react";
import exclusive from "../../assets/images/updatedExclusive2.png";

function GetMentored() {
  return (
    <section className="h-fit md:h-[50vh] lg:h-[100vh] py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-10/12 mx-auto">
        <div className="">
          <h1 className="text-2xl md:text-3xl font-bold  font-gilroy text-center  w-full align-left text-[#222057] mb-4 lg:leading-snug	">
            Get Mentored One on One
          </h1>
          <p className="font-gilroyregular text-[#222057] text-left  font-extralight text-white mb-1">
            This program gives you exclusive access to a mentor with a physical
            and virtual option to learn at your own pace. It’s a Flexible class
            model with hands on intensive learning, quality approach at your own
            pace.
          </p>
          <p className="font-gilroyregular text-[#222057] text-left  font-extralight text-white mb-1">
            Perks of our exclusive program is more learning hours, question and
            answers sessions with few or no distractions.{" "}
          </p>
          <p className="font-gilroyregular text-[#222057] text-left  font-extralight text-white mb-8">
            Location is not restricted to our learning centre, however exclusive
            program students who comes in to use our facility have full access
            to WiFi and a comfortable environment suitable for learning.{" "}
          </p>
        </div>
        <div className="mx-auto">
          <img src={exclusive} className="h-96" alt="" />
        </div>
      </div>
    </section>
  );
}

export default GetMentored;
