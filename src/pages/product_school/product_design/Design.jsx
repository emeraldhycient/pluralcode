import React, { useState } from "react";
import Faq from "../../../components/Faq";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Testimonies from "../../../components/home/Testimonies";
import WhereMentorsWork from "../../../components/home/WhereMentorsWork";
import Hero from "../../../components/product_school/product_design/Hero";
import Videobg from "../../../components/product_school/product_design/Videobg";
import YouWillLearn from "../../../components/product_school/product_design/YouWillLearn";

function Design() {
  const [faqs, setfaqs] = useState([
    {
      title: "What is UI design      ",
      content:
        "All the Visual Elements the users of a website, app or piece of software (mobile device or even appliance ) interact with.",
      isActive: false,
    },
    {
      title: "UX vs UI      ",
      content: `UI design is a sibling to UX (User Experience ) design
      -But with a narrowed focus. 
      
      UI design deals with individual design elements.
      UX concerns a user's entire Journey from beginning to the end`,
      isActive: false,
    },
    {
      title: "What is the Role of a UI Designer      ",
      content: `UI designers work closely with other design specialists (including Ux designers) to make sure every web page or Mobile app page conforms to the overall design vision of the project.

      Put another way, UI Designers are in charge of designing each of the screens or pages that users interact with, and making sure they all work together to create the experience the UX designer is aiming for.`,
      isActive: false,
    },
    {
      title: "What are UI design Job Responsibilities?      ",
      content: `•Designing the Interactivity of each UI elements 
      •Designing every individual Screen
      
      •Creating Design systems (style-guides)`,
      isActive: false,
    },
    {
      title: "Do You need a Degree or Certificate?      ",
      content: `No, You need a portfolio. A good One.

      While some companies require related university degrees, Most start ups only look out for your portfolio.`,
      isActive: false,
    },
    {
      title:
        "How Long it may Take for you to Find a Job as a Ui Designer?      ",
      content: `It depends on your learning curve.
      Learning, practicing, and creating a good portfolio can take a minimum of 6 months. But like I said it can be less depending on how fast you can learn. You also need to be ready financially. So you may want to save before starting.`,
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

export default Design;
