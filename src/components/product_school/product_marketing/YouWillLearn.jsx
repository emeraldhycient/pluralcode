import { useState } from "react";
import week from "../../../assets/images/week.png";
import week2 from "../../../assets/images/week2.png";
import Outline from "./Outline";

function YouWillLearn() {
  const [weeks, setweeks] = useState([
    {
      week: "1",
      icon: week,
      lessons: [
        "What is Product Marketing? ",
        "Duties and responsibilities of a Product Marketing Manager",
        "Product Marketing vs Product Management",
        "Product Marketing tools",
        "Product Marketing Plan Template",
        "Career Labs Session (Career prep)",
      ],
    },
    {
      week: "2",
      icon: week2,
      lessons: [
        "How to carry out a market research",
        "Process of carrying out a User research ",
        "Creating a real life User Persona",
        "Understanding the User",
        "User Research Method",
        "Mapping out a customer journey",
        "User Research template",
        "Career Labs: Assessment",
      ],
    },
    {
      week: "3-4",
      icon: week,
      lessons: ["Creating a go-to-market strategy",
        "Understanding business models",
        "Mapping out a sustainable distribution chain",
        "A/B Testing & Multivariate Marketing Test",
        "Go to market strategy template",
        "Types of pricing model",
        "Creating demand for product",
        "Churn rate",
        "Career Labs: Assessment",
      ],
    },
    {
      week: "5",
      icon: week2,
      lessons: [
        "Formation, characteristics of Mission and Vision statement",
        "Formation, characteristics of product Goal and Objectives ",
        "Drafting a value proposition?statement",
        "Crafting Product Messaging and Storytelling",
        "Drafting multiple and specific product features and benefits statement",
        "Content Strategy",
      ],
    },
    {
      week: "6",
      icon: week,
      lessons: [
        "What is Growth marketing",
        "Growth Marketing vs Traditional Marketing",
        "Growth Marketing Funnel",
        "Growth Marketing tools",
        "Growth Marketing metrics",
        "Career Labs: Mock Interview/Assessment",
      ],
    },
    {
      week: "7",
      icon: week2,
      lessons: [
        "Crafting a winning launch strategy",
        "Component of a launch strategy",
        "The 3 launch phase",
        "Launch Strategy vs Launch Process",
        "Steps in product launch",
        "What is product market fit",
        "Product market fit and Launch strategy",
        "Product market fit and Minimum Viable Product",
        "Launch Roadmap template",
      ],
    },
    {
      week: "8",
      icon: week,
      lessons: [
        "Participants will undergo a theoretical examination and real life project work to showcase what they have learnt in the course.",
      ],
    },
    {
      week: "Note",
      icon: week2,
      lessons: [
        "There will be a bi-weekly evaluation for every participant with real life case study of topics that was taught prior to the evaluation period.",
        "Each student will undergo a weekly presentation of assignment to prepare them for effective communication and presentation skills.",
      ],
    },
  ]);

  return (
    <section className="h-fit pt-16">
      <center>
        <h2 className="text-2xl font-semibold text-[#222057]">
          What You Will Learn
        </h2>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 md:px-24 mt-10">
        {weeks.map((course, i) => (
          <Outline course={course} key={i} />
        ))}
      </div>
    </section>
  );
}

export default YouWillLearn;
