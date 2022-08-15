import React, { useState, useEffect } from "react";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/cloud_school/azure/Hero";
import Videobg from "../../components/cloud_school/azure/Videobg";
import YouWillLearn from "../../components/cloud_school/azure/YouWillLearn";

function Azure() {
  const [faqs, setfaqs] = useState([
    {
      title: "What is clouding computing in simple words?",
      content:
        "In the simplest terms, cloud computing means storing and accessing data and programs over the internet instead of your computer's hard drive.",
      isActive: false,
    },
    {
      title: "What are the job descriptions of a cloud engineer?     ",
      content:
        "Cloud engineers are IT professionals who design, implement, and manage cloud-based systems for businesses. They develop and implement cloud-applications, migrate existing on-premise applications to the cloud, and debug cloud stacks.",
      isActive: false,
    },
    {
      title: "What are some  areas of cloud computing    ",
      content: `Cloud administrator,
      Cloud security analyst,
      Cloud network engineer,
      Cloud automation engineer,
      Cloud software engineer etc
      `,
      isActive: false,
    },
    {
      title: "How much are cloud engineers generally paid      ",
      content:
        "An Average cloud engineer is paid betweek $180,000-$200,000   Yearly",
      isActive: false,
    },
    {
      title:
        "What if I can't attend a class, will there be make up class?      ",
      content: "Classes are recorded in case students miss a class",
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
    document.title = "Cloud Computing (MS Azure)";
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

export default Azure;
