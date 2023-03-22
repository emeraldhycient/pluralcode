import React, { useState, useEffect } from "react";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/data_school/data_engineering/Hero";
import Videobg from "../../components/data_school/data_engineering/Videobg";
import YouWillLearn from "../../components/data_school/data_engineering/YouWillLearn";

function Data_Engineering() {
  const [faqs, setfaqs] = useState([
    {
      title: "What is Data Engineering ",
      content: `Modern-day Data Engineering is a subset of software engineering that focuses on moving, storing, and structuring data for use in applications or reporting.
      `,
      isActive: false,
    },
    {
      title: "What's the difference between a data scientist and a data engineer?",
      content: `The difference is basically the area of focus. A data scientist focuses on advanced mathematics and statistical analysis while a data engineer focuses on building infrastructure and architecture for data generation.      `,
      isActive: false,
    },
    {
      title: "What are the other names for data engineers?",
      content:
        "Data engineering is also called data architecture and data infrastructure.",
      isActive: false,
    },
    {
      title: "How can I transition into Data Engineering",
      content:
        "It's fairly common for people to transition into Data Engineering from another data-related role. The most common roles that people have successfully transitioned from are: Data Analyst, Business Intelligence Analyst",
      isActive: false,
    },
    {
      title: "Can I pay in installments?      ",
      content:
        "Yes, we have an installments option, where you pay 50% initial fee and spread the great through the first two months of the program       ",
      isActive: false,
    },
    {
      title: "Are Certificates awarded at the end of the program?      ",
      content:
        "Yes, Certificate of completion is awarded at the end of all our programs.",
      isActive: false,
    },
    {
      title: "What is required of me to start a class.      ",
      content:
        "A working laptop, a note pad and the willingness to start to finish.",
      isActive: false,
    },
  ]);

  useEffect(() => {
    document.title = "Data Engineering";
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Videobg />
      <YouWillLearn />
      <WhereMentorsWork />
      <Testimonies />
      <Faq faqs={faqs} setfaqs={setfaqs} />
      <Footer />
    </>
  );
}

export default Data_Engineering;
