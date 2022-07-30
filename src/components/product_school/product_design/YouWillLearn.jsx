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
        " Intro to UI/UX design & tools",
        " Understanding how tool work",
        "    Layers, Assets, Page & Design",
        "   Move, Frame,Slice,Shapes,Pen & Pencil",
        " Text & Effect",
        "Pan & Comment",
        "Color Theory & style",
      ],
    },
    {
      week: "2",
      icon: week2,
      lessons: [
        " Applying Design Principle",
        "contrast, Hierarchy,Focal Point",
        " Alignment & Balance",
        " Class Exercise",
      ],
    },
    {
      week: "3",
      icon: week,
      lessons: [
        "Keyboard Shortcut",
        " Layout Grid",
        "Wireframing",
        " Exercise",
      ],
    },
    {
      week: "4",
      icon: week2,
      lessons: [
        "Group v component",
        " Masking",
        " Layer Blending Mode",
        " Constraint V Auto Layout",
        " Inspect",
        " Export",
        "Class Exercise",
      ],
    },
    {
      week: "5&6",
      icon: week,
      lessons: [
        "Building Basic App UI",
        " Prototype",
        " Recap",
        "Building basic website ui        ",
      ],
    },
    {
      week: "7,8&9",
      icon: week2,
      lessons: [
        "Spliting into groups",
        " Building Advance App UI",
        " Prototype Advance App UI",
        "Building Advance Web UI Prototype",
        "Prototyping Advance web UI",
        "starting A Career as a UI Designer",
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
