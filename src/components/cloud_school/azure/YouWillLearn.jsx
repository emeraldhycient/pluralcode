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
        " Intro to cloud computing",
        " what is cloud computing",
        " Describe the shared responsibilities model",
        " Define Cloud Model",
        " Describe the Consumption based model",
      ],
    },
    {
      week: "2",
      icon: week2,
      lessons: [
        "Describe the benefits of high availability and scalability in the cloud",
        "Describe the benefits of reliability and predictability in the cloud",
        "Describe the benefits of security and governance in the cloud",
        "knowledge check",
      ],
    },
    {
      week: "3",
      icon: week,
      lessons: [
        "Azure fundamentals",
        " Discuss different types of cloud models",
        "Describe cloud benefits and considerations",
        "knowledge check",
      ],
    },
    {
      week: "4",
      icon: week2,
      lessons: [
        "Overview of Azure subscriptions,management groups, and resource groups",
        " azure regions,availability zones and region pairs",
        " Azure resources and azure resource manager",
        " Azure subscription  and management group",
        "knowledge check",
      ],
    },
    {
      week: "5&6",
      icon: week,
      lessons: [
        "Describe Infrastructure as a Service (IaaS)",
        "Describe platform as a service (PaaS) ",
        "Describe software as a service (saaS) ",
        "knowledge check",
      ],
    },
    {
      week: "7,8&9...16",
      icon: week2,
      lessons: [
        "Overview of Azure compute services",
        " Decide when to use azure Virtual machines",
        " Decide when to use azure App services",
        " Questions & Answers",
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
