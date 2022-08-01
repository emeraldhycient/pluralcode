import React, { useState } from "react";
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
      title: "header long something something something",
      content: "content long something something something",
      isActive: false,
    },
  ]);

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
