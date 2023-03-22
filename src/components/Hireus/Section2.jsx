import { useState } from "react";
import Card from "./Card";
import hire1 from "../../assets/images/hire1.png";
import hire2 from "../../assets/images/hire2.png";
import hire3 from "../../assets/images/hire3.png";
import hire4 from "../../assets/images/hire4.png";

function Section3() {
  const [reasons, setreasons] = useState([
    {
      title: "Top-class team",
      description:
        "World class professionals with hands on technical expertise.",
      style: "bg-[#2220570D]",
      textStyle: "text-[#222057]",
      image: hire1,
    },
    {
      title: "Agile Culture",
      description:
        "An understanding, flexible, collaborative environment to achive high performance results.",
      style: "bg-[#F8991D1A]",
      textStyle: "text-[#F8991D]",

      image: hire2,
    },
    {
      title: "Speed",
      description:
        "Fast paced collaborative work flow to ensure acute delivery.",
      style: "bg-[#F8991D1A]",
      textStyle: "text-[#F8991D]",

      image: hire3,
    },
    {
      title: "Diversity",
      description:
        "An organization that accepts  and includes of employees of all backgrounds .",
      style: "bg-[#2220570D]",
      textStyle: "text-[#222057]",

      image: hire4,
    },
  ]);

  return (
    <div className="h-fit  w-full w-screen pt-10 md:pt-0 bg-[#FFFDFA] pb-20 flex flex-col justify-center items-center">
      <h1 className="text-[30px] font-semibold text-center text-[#222057] mb-2 md:mb-10 pt-10">
        How to enroll?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-11/12 md:w-10/12 mx-auto mt-8">
        {reasons.map((reason, index) => (
          <Card key={index} reason={reason} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Section3;
