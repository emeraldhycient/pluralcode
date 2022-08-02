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
      title: "What is Machine learning?",
      content: `Machine learning is the ability of a system to learn a task without being explicitly programmed from given data. It focuses on the development of computer programs that can access data and use it to learn for themselves.`,
      isActive: false,
    },
    {
      title: "What skills are needed for machine learning jobs?      ",
      content: `PluralCode runs a beginner friendly model, although having a background knowledge in Data Analytics is a plus.
      `,
      isActive: false,
    },
    {
      title: "Can I learn virtually?      ",
      content:
        "There's only physical option for Machine learning, we currently do not offer a virtual class for machine learning      .",
      isActive: false,
    },
    {
      title: "Do you teach Python?      ",
      content:
        "Yes, Python for Machine learning is part of the curriculum for taking Machine learning",
      isActive: false,
    },
    {
      title:
        "Is Artifical intelligence and Machine learning the same thing?      ",
      content:
        "Machine learning comprises artificial intelligence algorithms that create systems capable of making predictions or classifications based on data.",
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
      title: "Are machine learning careers in demand?      ",
      content:
        "Machine learning careers are in demand, as employers from most sectors adopt the technology and processes",
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
