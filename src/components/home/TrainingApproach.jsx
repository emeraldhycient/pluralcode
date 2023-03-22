import { useState } from "react";
import TrainingCard from "./TrainingCard";
import approach from "../../assets/images/approach.png";
import approach1 from "../../assets/images/approach1.png";
import approach2 from "../../assets/images/approach2.png";



function TrainingApproach() {
  const [approaches, setapproaches] = useState([
    {
      title: "Flexibility",
      content:
        "Flexible class schedule with hands on intensive learning, quality approach at your own pace.",
    },
    {
      title: "Project Based Learning",
      content:
        "Practical learning instructional approach designed to give students the opportunity to develop knowledge and skills.",
    },
    {
      title: "Remote & Physical Options",
      content:
        "Learn from the comfort of your home/ work space or physical learning structure with acute mentorship.",
    },
    {
      title: "Truly Exclusive ",
      content:
        "Exclusive learning allows you learn on your own terms, weekday or weekends. Take your private tutorials, when you want it.",
    },
  ]);

  return (
    <section className="h-fit py-24 md:py-36 w-screen bg-[#FFFDFA]">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-4xl font-medium text-[#222057] font-gilroy text-center w-full align-left text-[#232323] mb-20 leading-snug	">
          Our Training Approach
        </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 md:w-11/12  mx-auto h-full w-full">
        {approaches.map((approach) => (
          <TrainingCard approach={approach} key={approach.title} />
        ))}
      </div>
      <div className="mt-20">
        <button
          type="submit"
          className="bg-amber-500 border-[.001rem] border-amber-500 mx-auto px-8 py-3 text-[12px] rounded mt-3  w-fit md:w-[15%]  lg:w-[15%] flex justify-center items-center text-white"
        // disabled={loading}
        >
          <a href="/visit" className="flex items-center text-white">
            Book A Visit
          </a>
        </button>
      </div>

    </section>
  );
}

export default TrainingApproach;
