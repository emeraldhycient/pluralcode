import React, { useState, useEffect } from "react";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/product_school/product_marketing/Hero";
import Videobg from "../../components/product_school/product_marketing/Videobg";
import YouWillLearn from "../../components/product_school/product_marketing/YouWillLearn";

function Product_marketing() {
  const [faqs, setfaqs] = useState([
    {
      title: "What is product marketing ",
      content:
        "Product marketing is the process of bringing a product to market. This includes deciding the product's positioning and messaging, launching the product to the market.",
      isActive: false,
    },
    {
      title: "What is the difference between product management and marketing ",
      content:
        `A Product Manager is responsible for the overall vision and strategy, while:
A Product Marketer is responsible for defining, building and communicating a product’s positioning, value and go- to - market strategy.  
`,
      isActive: false,
    },
    {
      title: "Is a Marketing Manager above a Product Manager in rank?",
      content: `No, both roles are important and their duties can be very similar.`,
      isActive: false,
    },
    {
      title: "What is the role of product marketer ?",
      content:
        "Product marketing is responsible for developing positioning, messaging, competitive differentiation, and enabling the sales and marketing teams to ensure they're aligned so they can work efficiently to generate and close opportunities",
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
    {
      title: "What is required of me to start a class.      ",
      content:
        "A working laptop, a note pad and the willingness to start to finish.",
      isActive: false,
    },
  ]);

  useEffect(() => {
    document.title = "Product marketing";
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

export default Product_marketing;
