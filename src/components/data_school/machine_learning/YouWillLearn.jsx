import { useState } from "react";
import week from "../../../assets/images/week.png";
import week2 from "../../../assets/images/week2.png";
import Outline from "./Outline";

function YouWillLearn() {
  const [weeks, setweeks] = useState([
    {
      week: "1",
      icon: week,
      lessons: [" Databasing Excel ", "  Introduction to Statistics Learning "],
    },
    {
      week: "2",
      icon: week2,
      lessons: [
        " Data Preprocessing in Python",
        " Simple Linear Regression         ",
      ],
    },
    {
      week: "3",
      icon: week,
      lessons: [
        "Multiple Linear Regression ",
        " Polynomial Regression         ",
      ],
    },
    {
      week: "4",
      icon: week2,
      lessons: [
        "Support Vector Regression (SVR) ",
        " Decision Tree Regression         ",
      ],
    },
    {
      week: "5&6",
      icon: week,
      lessons: [
        " Random Forest Regression",
        "Evaluating Regression Models Performance         ",
        "Regression Model Selection   ",
        "Logistic Regression ",
      ],
    },
    {
      week: "7,8&9 ...20",
      icon: week2,
      lessons: [
        "K-Nearest Neighbors (K-NN)",
        " Support Vector Machine (SVM) ",
        "Kernel SVM",
        "Naive Bayes         ",
        " Decision Tree Classification Random Forest Classification         ",
        "Classification Model Selection          ",
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
