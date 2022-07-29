import { useState } from "react";
import TrainingCard from "./TrainingCard";
import mentor1 from "../../assets/images/mentor1.png";
import mentor2 from "../../assets/images/mentor2.png";
import mentor3 from "../../assets/images/mentor3.png";
import mentor4 from "../../assets/images/mentor4.png";

function TrainingApproach() {
  const [approaches, setapproaches] = useState([
    {
      image: mentor1,
      title: "Virtual and Physical",
      content:
        "A Virtual and physical approach for both less distraction learning and classroom teaching",
    },
    {
      image: mentor2,
      title: "Professional Curriculum",
      content:
        "Professional standard Curriculum for A-z skill acquisition with Multifaceted real life Projects",
    },
    {
      image: mentor3,
      title: "Capstone Project",
      content:
        "Multifaceted real life Project that  serves as a culminating academic experience that typically prepares students as an high value asset to prospective employers",
    },
    {
      image: mentor4,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-11/12 md:w-11/12  mx-auto h-full w-full">
        {approaches.map((approach) => (
          <TrainingCard approach={approach} key={approach.title} />
        ))}
      </div>
    </section>
  );
}

export default TrainingApproach;
