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
        " Introduction to Problem Solving        ",
        " Introduction to Data Analysis",
      ],
    },
    {
      week: "2",
      icon: week2,
      lessons: [
        " Basics of Excel        ",
        " Data Manipulation and Data Cleaning",
        "More on Data Cleaning        ",
        "Data Cleaning with Power Query        ",
        "  Basics of Pivot Table",
        "Slicer and Timeline",
        "Visualization and Presentation",
      ],
    },
    {
      week: "3",
      icon: week,
      lessons: [
        "Introduction to SQL",
        " Data Definition Language",
        "Data Manipulation Language ",
        "Data Query Languages",
      ],
    },
    {
      week: "4",
      icon: week2,
      lessons: [
        " Introduction to POWER BI        ",
        "ETL, ELT and Reverse ETL Process        ",
        " Data Visualization & Dashboarding I",
      ],
    },
    {
      week: "5&6",
      icon: week,
      lessons: [
        "Introduction to Python Programming",
        "Python Programming using Anaconda",
        "Package and Jupyter notebook",
        "Introduction to Numpy and Pandas Libraries",
        " Text & Effect",
        "Pan & Comment",
        "Color Theory & style",
      ],
    },
    {
      week: "7,8&9 ...16",
      icon: week2,
      lessons: [
        "Data wrangling",
        "Dealing with Missing and Messy data",
        "Introduction to Data Visualization and Exploratory Analysis",
        "Data Visualization using Pandas default visualization library, matplotlib and seaborn libraries.",
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
