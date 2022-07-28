import { useState } from "react";
import TrainingCard from "./TrainingCard";
import approach from "../../assets/images/approach.png";
import approach1 from "../../assets/images/approach1.png";
import approach2 from "../../assets/images/approach2.png";

function TrainingApproach() {
  const [approaches, setapproaches] = useState([
    {
      image: approach,
      title: "Virtual and Physical",
      content:
        "A Virtual and physical approach for both less distraction learning and classroom teaching",
    },
    {
      image: approach1,
      title: "Professional Curriculum",
      content:
        "Professional standard Curriculum for A-z skill acquisition with Multifaceted real life Projects",
    },
    {
      image: approach2,
      title: "Mentor's Community",
      content:
        "A community of experienced mentors with quality of mentorship experience towards the students.",
    },
  ]);

  return (
    <section className="h-fit py-12 md:py-20 w-screen bg-gray-50">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-4xl font-medium text-[#222057] font-gilroy text-center w-full align-left text-[#232323] mb-20 leading-snug	">
          Our mentorship Approach
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
