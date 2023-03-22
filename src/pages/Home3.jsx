import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/home3/Header";
import HeroSection from "../components/home3/HeroSection";
import Ourschool from "../components/home3/Ourschool";
import Testimonies from "../components/home3/Testimonies";
import Videobg from "../components/home3/Videobg";
import WhereMentorsWork from "../components/home3/WhereMentorsWork";
import Layout from "../components/layout/Layout";
import Certification from "../components/home3/Certification";
import Faq from "../components/Faq";
import HowToEnroll from "../components/home3/HowToEnroll";
import Section2 from "../components/home3/Section2";
import Press from "../components/home3/Press";
import HowItWorks from "../components/home3/howItWorks";
import Graduate from "../components/home3/Graduate";
import Why from "../components/home3/Why";


function Home3() {

  const [faqs, setfaqs] = useState([
    {
      title: "What is the advantage of PluralCode diploma program?",
      content:
        "Diplomas make you job-ready, faster Many university degrees will focus on theory-based knowledge that may not guarantee you the career or position you want. Vocational education like this, gives you the opportunity to understand the skills you need while allowing you to put these skills into practice while you study. That's what our diploma program offers in Pluralcode. ",
      isActive: false,
    },
    {
      title: "What is the purpose of the diploma?",
      content: `Our Diplomas program  focuses on specific skills for career-readiness. You're awarded for completing a diploma program for having in-depth and specific coursework that is more specialized than a certification.`,
      isActive: false,
    },
    {
      title: "Can anybody apply for the Diploma program?",
      content: `Yes anybody is eligible to apply for the Diploma programs. You may be required to undergo a test to ascertain your experience.`,
      isActive: false,
    },
    {
      title: "What are the benefits of your diploma program ?",
      content: `This offers you a chance to add an internationally recognized Professional Diploma to your CV. Furthermore, our internship program ensures you already have the required real-world work experience in your chosen field which then prepares you to assume professional roles after your graduation.`,
      isActive: false,
    },
    {
      title: "Whats the difference between the diploma program the certification program?",
      content: `Our certification program are essentially a testament of course completion. Our Diploma program however does much more which is to position you as an advanced professional in that career having gotten the training under a 7 months diploma program`,
      isActive: false,
    },
    {
      title: "How many months is your diploma program?",
      content: `The diploma program takes between 6-8 months across all courses.`,
      isActive: false,
    },
    {
      title: "Is the Diploma program internationally recognized?",
      content: `Yes, our Diploma programs are fully recognized by global accreditation boards in the USA, Canada & Europe.`,
      isActive: false,
    }
  ]);

  return (
    <Layout>
      <Header />
      <HeroSection />
      <Ourschool />
      <HowItWorks />
      <Videobg />
      <Graduate />
      <Press />
      <Certification/>
      <Testimonies />
      <HowToEnroll />
      <Why/>
      {/* <Certification /> */}
      {/* <Section2 /> */}
      <Faq faqs={faqs} setfaqs={setfaqs} />
      {/* <WhereMentorsWork /> */}
      <Footer />
    </Layout>
  );
}

export default Home3;
