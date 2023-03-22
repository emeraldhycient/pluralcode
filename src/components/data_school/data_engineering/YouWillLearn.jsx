import { useState } from "react";
import week from "../../../assets/images/week.png";
import week2 from "../../../assets/images/week2.png";
import Outline from "./Outline";

function YouWillLearn() {
  const [weeks, setweeks] = useState([
    {
      week: "1 & 2",
      icon: week,
      lessons: [`Introduction to Problem Solving`,
        " Introduction to Data Analysis",
        "Basics of Excel",
        "Data Manipulation and Data Cleaning",
        "More on Data Cleaning"
        , "More on Data Cleaning",
        "Data Cleaning with Power Query",
        "Basics of Pivot Table",
        "Slicer and Timeline"],
    },
    {
      week: "3-4",
      icon: week2,
      lessons: [
        "Data Visualization and Presentation",
        "Data Modeling        ",
        "Revision on Data Modeling",
        "More functions",
        "Project",
        "Project",
      ],
    },
    {
      week: "5-7",
      icon: week,
      lessons: [
        "career session (physical)",
        "Data Visualization & Dashboarding I",
        "Data Visualization & Dashboarding II",
        "Introduction to SQL",
        "Data Definition Language",
        "Data Manipulation Language ",
        "Data Query Languages",
        "Data Sorting and Filtering"
      ],
    },
    {
      week: "8-10",
      icon: week2,
      lessons: [
        "Data Sorting and Filtering",
        "Joins and Constraints",
        "Writing Queries with Aggregate Functions",
        "career session virtual (mock interviews)",
      ],
    },
    {
      week: "11-12",
      icon: week,
      lessons: [
        "Introduction to Data Engineering ",
        "Setup Development Environment to learn building Data Engineering Applications",
        "Database Essentials for Data Engineering using Postgres such as: ",
        "Data Engineering Programming Essentials using Python such as ",
      ],
    },
    {
      week: "13-14",
      icon: week2,
      lessons: [
        "Data Engineering Programming Essentials using Python such as ",
        " Data Engineering using ... ",
      ],
    },
    {
      week: "15-17",
      icon: week2,
      lessons: [
        "Data Engineering using Spark SQL  ",
        "Learn how to write high quality Spark SQL queries using ",
        "Relevance of Spark Metastore ",
        " integration of Dataframes ",
        "Spark SQL ",
        "Ability to build Data Engineering Pipelines using Spark leveraging Python as Programming Language",
      ],
    },
    {
      week: "18-20",
      icon: week2,
      lessons: [
        "Use of different file formats in building Data Engineering Pipelines such as ",
        "Setup self support single node Hadoop and Spark Cluster to get enough practice on HDFS and YARN",
        "Understanding Complete Spark Application Development Life Cycle to build Spark Applications using Pyspark.",
        "Review the applications using Spark UI.",
        "Spark SQL ",
        "Microsoft  Azure.",
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
