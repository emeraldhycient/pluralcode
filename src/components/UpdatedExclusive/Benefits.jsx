import React from "react";
import exclusive from "../../assets/images/benefit.png";

function Benefits() {
  const Card = ({ title, desc }) => (
    <div className="shadow h-44 w-full rounded p-5 text-center bg-white">
      <img src={exclusive} className="h-6 w-6 mx-auto" alt="" />
      <h1 className="text-[#222057] text[18px] font-semibold mb-2">{title}</h1>
      <h6 className=" text-[14px]">{desc}</h6>
    </div>
  );

  return (
    <section className="h-fit md:h-[70vh] lg:h-[110vh] py-16 bg-[#F8F8FA] mb-8">
      <h1 className="text-2xl md:text-3xl font-bold  font-gilroy text-center  w-full align-left text-[#222057] mb-4 lg:leading-snug	">
        How To get Started
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-10/12 md:w-8/12 mx-auto mt-10 md:mt-20">
        <Card
          title="Flexible Schedule"
          desc="Flexible schedule based on your own timing and class format."
        />
        <Card
          title="Learn at Your Pace"
          desc="Learn at your own pace. Quality tutorials built for an adaptable learning approach"
        />
        <Card
          title="Exclusive Access"
          desc="Exclusive access to your mentor/resource materials, Free Wifi and comfortable environment to learn."
        />
        <Card
          title="Practice-Based 
Approach"
          desc="Practical learning through engaging projects set around real life challenges."
        />
        <Card
          title="Certificate"
          desc="Certificate of completion issued at the end of the program"
        />
        <Card
          title="Experienced Mentors"
          desc="Highly Qualified professionals hired to
Cater solely for your learning experience."
        />
      </div>
    </section>
  );
}

export default Benefits;
