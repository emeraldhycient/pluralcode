import React, { useState, useEffect } from "react";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/product_school/product_management/Hero";
import Videobg from "../../components/product_school/product_management/Videobg";
import YouWillLearn from "../../components/product_school/product_management/YouWillLearn";

function Product_management() {
  const [faqs, setfaqs] = useState([
    {
      title: "What is Product Management?",
      content:
        "Product Management is the process of conceiving, planning, developing, testing, launching, delivering and withdrawing products from the market",
      isActive: false,
    },
    {
      title: "What are the job descriptions of a product manager       ",
      content:
        "They manage from concept to design, sample production, promotion and end of product. They deliver operating plan including market share, revenue, profit and Roi.",
      isActive: false,
    },
    {
      title: "What are the three areas of product management       ",
      content: `Product discovery ,
      Product planning,
      Product Development
      `,
      isActive: false,
    },
    {
      title: "How much are product managers generally paid      ",
      content:
        "An Average product manager is paid betweek $180,000-$200,000   Yearly",
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
    document.title = "Product Management";
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

export default Product_management;
