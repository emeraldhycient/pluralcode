import React, { useState, useEffect } from "react";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/programming_school/fullstack/Hero";
import Videobg from "../../components/programming_school/fullstack/Videobg";
import YouWillLearn from "../../components/programming_school/fullstack/YouWillLearn";

function Fullstack() {
  const [faqs, setfaqs] = useState([
    {
      title:
        "What is the difference between a front end developer and a back end developer",
      content: `Front-end developers are responsible for the website’s appearance, its “look and feel.” They are in charge of things like color schemes, font styles and the general layout

      Back-end developers are responsible for tasks such as database management and website security. They are also responsible for integrating third-party services with a site, such as social media platforms or payment gateways.`,
      isActive: false,
    },
    {
      title:
        "Do I need to have a knowledge of coding to learn Web development.      ",
      content:
        "As much as it is Important, we run a beginner friendly model at PluralCode. Hence you learn from scratch.",
      isActive: false,
    },
    {
      title:
        "What's the program duration for Full stack web development       ",
      content:
        "28 weeks inclusive of two captstone projects for portfolio development.      ",
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
    document.title = "software development school";
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

export default Fullstack;
