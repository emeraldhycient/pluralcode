import React, { useState, useEffect } from "react";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/data_school/data_analysis/Hero";
import Videobg from "../../components/data_school/data_analysis/Videobg";
import YouWillLearn from "../../components/data_school/data_analysis/YouWillLearn";

function Data_analysis() {
  const [faqs, setfaqs] = useState([
    {
      title: "What do data analysts do ?      ",
      content:
        "They Gather data, clean data, Model data, interpret data and present it.      ",
      isActive: false,
    },
    {
      title: "Do you place student for internship roles?      ",
      content:
        "We do not, rather we help you build your portfolio and put you up for recommendations.      ",
      isActive: false,
    },
    {
      title: "What challenges do data analysts face?      ",
      content: "Majorly collection of meaningful data.      ",
      isActive: false,
    },
    {
      title: "Is data analytics same as business analysis?      ",
      content:
        "No they're two different skills. While Data analysts analyse data, business analysts do analysis for businesses.      ",
      isActive: false,
    },
    {
      title: "What is the goal of data analysis?      ",
      content:
        "The chief aim of data analytics is to apply statistical analysis and technologies on data to find trends and solve problems.",
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
    {
      title: "What is required of me to start a class.      ",
      content:
        "A working laptop, a note pad and the willingness to start to finish.",
      isActive: false,
    },
  ]);

  useEffect(() => {
    document.title = "Data Analytics";
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

export default Data_analysis;
