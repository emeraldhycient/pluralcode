import React, { useState, useEffect } from "react";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/data_school/machine_learning/Hero";
import Videobg from "../../components/data_school/machine_learning/Videobg";
import YouWillLearn from "../../components/data_school/machine_learning/YouWillLearn";

function Machine_learning() {
  const [faqs, setfaqs] = useState([
    {
      title: "header long something something something",
      content: "content long something something something",
      isActive: false,
    },
    {
      title: "header long something something something",
      content: "content long something something something",
      isActive: false,
    },
    {
      title: "header long something something something",
      content: "content long something something something",
      isActive: false,
    },
    {
      title: "header long something something something",
      content: "content long something something something",
      isActive: false,
    },
    {
      title: "header long something something something",
      content: "content long something something something",
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
      title: "header long something something something",
      content: "content long something something something",
      isActive: false,
    },
  ]);

  useEffect(() => {
    document.title = "Machine Learning";
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

export default Machine_learning;
