import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/verifycertificate/Header";
import HeroSection from "../../components/verifycertificate/HeroSection";
import Ourschool from "../../components/verifycertificate/Ourschool";
import Testimonies from "../../components/verifycertificate/Testimonies";
import Videobg from "../../components/verifycertificate/Videobg";
import WhereMentorsWork from "../../components/verifycertificate/WhereMentorsWork";
import Layout from "../../components/layout/Layout";
import Certification from "../../components/verifycertificate/Certification";
import Faq from "../../components/Faq";
import HowToEnroll from "../../components/verifycertificate/HowToEnroll";
import Section2 from "../../components/verifycertificate/Section2";
import Press from "../../components/verifycertificate/Press";
import HowItWorks from "../../components/verifycertificate/howItWorks";
import Graduate from "../../components/verifycertificate/Graduate";
import Why from "../../components/verifycertificate/Why";
import BridgingGap from "../../components/home/BridgingGap";


function VerifyCertificate() {

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
      <BridgingGap/>
      <Press />
      <Certification/>
      <Testimonies />
      <HowToEnroll />
      <Why/>
      {/* <Ourschool />
      <HowItWorks />
      <Videobg />
      <Graduate /> */}
      <Faq faqs={faqs} setfaqs={setfaqs} />
      <WhereMentorsWork />
      <Footer />
    </Layout>
  );
}

export default VerifyCertificate;
