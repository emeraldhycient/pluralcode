import { useState } from "react";
import TrainingCard from "./TrainingCard";
import approach from "../../assets/images/approach.png";
import approach1 from "../../assets/images/approach1.png";
import approach2 from "../../assets/images/approach2.png";

function TrainingApproach() {
  const [approaches, setapproaches] = useState([
    {
      image: approach,
      title: "Physical Classes",
      content:
        "A physical conducive learning  environment for hands-on training.",
    },
    {
      image: approach1,
      title: "Virtual Classes",
      content:
        "A virtual learning program that allows for  flexibility and self-paced learning.",
    },
    {
      image: approach2,
      title: "One-on-One Mentoring",
      content:
        "A one on one mentorship that allows for high interaction with the mentor.",
    },
  ]);

  return (
    <section className="h-fit py-12 md:py-36 w-screen bg-gray-50">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-4xl font-medium text-[#222057] font-gilroy text-center w-full align-left text-[#232323] mb-20 leading-snug	">
          Our Training Approach
        </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 md:w-11/12  mx-auto h-full w-full">
        {approaches.map((approach) => (
          <TrainingCard approach={approach} key={approach.title} />
        ))}
      </div>
    </section>
  );
}

export default TrainingApproach;
