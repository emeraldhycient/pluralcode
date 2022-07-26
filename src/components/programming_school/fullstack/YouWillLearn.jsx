import { useState } from "react";
import week from "../../../assets/images/week.png";
import week2 from "../../../assets/images/week2.png";
import Outline from "./Outline";

function YouWillLearn() {
  const [weeks, setweeks] = useState([
    {
      week: "1",
      icon: week,
      lessons: ["HTML5"],
    },
    {
      week: "2",
      icon: week2,
      lessons: ["CSS3"],
    },
    {
      week: "3",
      icon: week,
      lessons: [" JavaScript"],
    },
    {
      week: "4",
      icon: week2,
      lessons: ["JSON"],
    },
    {
      week: "5&6",
      icon: week,
      lessons: ["Bootstrap", "Sass"],
    },
    {
      week: "7,8&9",
      icon: week2,
      lessons: [
        "React",
        "Version Control",
        "Node.js",
        "Frameworks",
        "Database",
        "Node Web APIs",
        "MYSQL Database",
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
