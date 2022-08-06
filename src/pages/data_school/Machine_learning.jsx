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
      title: "What skills are needed for Data science jobs?      ",
      content: `PluralCode runs a beginner friendly model, although having a background knowledge in Data Analytics is a plus.
      `,
      isActive: false,
    },
    {
      title: "Is Data Science different from Data Analytics",
      content: `While Data Science focuses on finding meaningful correlations between large datasets, Data Analytics is designed to uncover the specifics of extracted insights. In other words, Data Analytics is a branch of Data Science that focuses on more specific answers to the questions that Data Science brings forth.
      `,
      isActive: false,
    },
    {
      title: "Can I learn virtually?      ",
      content:
        "There's only physical option for data science, we currently do not offer a virtual class for data science learning      .",
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
