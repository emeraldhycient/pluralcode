import { useState } from "react";
import week from "../../../assets/images/week.png";
import week2 from "../../../assets/images/week2.png";
import Outline from "./Outline";

function YouWillLearn() {
  const [weeks, setweeks] = useState([
    {
      week: "1",
      icon: week,
      lessons: [`Introduction to basic Python`,
        " Introduction to Statistics Learning ",
      ],
    },
    {
      week: "2",
      icon: week2,
      lessons: [
        "Data Preprocessing in Python",
      ],
    },
    {
      week: "3",
      icon: week,
      lessons: [
        "Simple Linear Regression ",
        "Multiple Linear Regression ",
      ],
    },
    {
      week: "4",
      icon: week2,
      lessons: [
        "Polynomial Regression ",
        "Support Vector Regression (SVR) ",
      ],
    },
    {
      week: "5",
      icon: week,
      lessons: [
        "Introduction to Data Engineering ",
        "Setup Development Environment to learn building Data Engineering Applications",
        "Database Essentials for Data Engineering using Postgres such as: ",
        "Data Engineering Programming Essentials using Python such as ",
      ],
    },
    {
      week: "6",
      icon: week2,
      lessons: [
        "Decision Tree Regression ",
        "Random Forest Regression",
        "Evaluating Regression Models Performance ",
        "Regression Model Selection   ",
      ],
    },
    {
      week: "7,8...20",
      icon: week2,
      lessons: [
        "Logistic Regression  ",
        "K-Nearest Neighbors (K-NN)",
        "Support Vector Machine (SVM)  ",
        "Kernel SVM",
        "Naive Bayes ",
        "Decision Tree Classification Random Forest Classification",
        "Classification Model Selection  ",
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
