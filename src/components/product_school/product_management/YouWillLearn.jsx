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
        "What is Product ",
        " product Management",
        " Who is a Product Manager",
        " skill set required of Product Manager",
      ],
    },
    {
      week: "2",
      icon: week2,
      lessons: [
        "Who do Product Manager work with?",
        "Role and activities of a Product Manager",
        "Typical life cycle of a product ",
        "Basic tool Product Managers use",
      ],
    },
    {
      week: "3",
      icon: week,
      lessons: ["Product Thinking Deep Dive", "Design Thinking process"],
    },
    {
      week: "4",
      icon: week2,
      lessons: [
        "Validating idea with coustomers need",
        "Conducting research ",
        " Creating an MVP",
        "   Move, Frame,Slice,Shapes,Pen & Pencil",
        " Text & Effect",
        "Pan & Comment",
        "Color Theory & style",
      ],
    },
    {
      week: "5&6",
      icon: week,
      lessons: [
        "Understanding Product Metrics",
        "Why Product Metrics (why do we need to measure)?",
        "What are the common mistakes Product Managers Make",
        "  What you should track as a Product Manager",
        "What user Oriented Metrics can you track ",
      ],
    },
    {
      week: "7,8",
      icon: week2,
      lessons: [
        "Business Oriented Metrics to track",
        "Tools to use for Tracking Product Metrics ",
        "Agile And Scrum Frame Work",
        "Product Prioitization",
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
