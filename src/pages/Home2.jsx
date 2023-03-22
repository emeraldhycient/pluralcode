import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/home2/Header";
import HeroSection from "../components/home2/HeroSection";
import Ourschool from "../components/home2/Ourschool";
import Testimonies from "../components/home2/Testimonies";
import Videobg from "../components/home2/Videobg";
import WhereMentorsWork from "../components/home2/WhereMentorsWork";
import Layout from "../components/layout/Layout";
import Certification from "../components/home2/Certification";
import Faq from "../components/Faq";
import Why from "../components/home2/why";
import Section2 from "../components/home2/Section2";
import Press from "../components/home/Press";


function Home2() {

  const [faqs, setfaqs] = useState([
    {
      title: "Why do I have to speak with your Student Advisor?",
      content:
        "Our Advisors are there to get to know your strengths, your background, location, occupation, interests etc and use that to make suggestions for your programs as well as answer all your inquiries on a more human note. This has been proven to yield extraordinary results amongst our students and that is why we insist on it prior to enrollment.",
      isActive: false,
    },
    {
      title: "Are Certificates awarded at the end of the program?",
      content: `Yes, Certificate of completion is awarded at the end of all our programs.`,
      isActive: false,
    },
    {
      title: "How long will it take to find a job after learning?",
      content: `It depends on your learning speed, practicing, and creating a good portfolio can take a few months.`,
      isActive: false,
    },
    {
      title: "Can I pay in Installments?",
      content: `yes, the installment plan typically attracts a slightly higher fee, but you have the opportunity to pay only 70% upfront, with the final installment coming within the first month of your program.`,
      isActive: false,
    },
    {
      title: "What is required of me to start a class?",
      content: `All our Certificate Courses are beginner friendly, and so all you really need is a working Laptop, a Notebook, and a great willingness to learn.`,
      isActive: false,
    }
  ]);

  return (
    <Layout>
      <Header />
      <HeroSection />
      <Ourschool />
      <Videobg />
      <Why />
      <Certification />
      <Testimonies />
      <Press />
      <Section2 />
      <Faq faqs={faqs} setfaqs={setfaqs} />
      <div className="w-full mb-4 flex justify-center items-cente">
        <div className="md:flex w-[80%] md:w-[70%] lg:w-[30%] mx-auto lg:mx-0  justify-between gap-4">
          <button className="bg-amber-500 text-[12px] text-white px-4 md:px-8 py-2 rounded w-56 mx-auto lg:mx-0  flex justify-center items-center">
            <a
              href="https://student.pluralcode.institute" className="flex items-center"
            >
              Enroll Now
            </a>
          </button>
          <button className="bg-white border border-amber-500 w-[73%] md:w-[30%] mx-auto mt-4 md:mt-0 text-amber-500 text-white px-4 py-2 text-[12px] rounded w-full flex justify-center items-center">
            <a href="" className="flex items-center text-amber-500">
              <img src="https://i.im.ge/2023/02/08/am3XyX.Vector.png" className="mr-1" alt="" />
              Chat On WhatsApp
            </a>
          </button>
        </div>
      </div>
      <WhereMentorsWork />
      <Footer />
    </Layout>
  );
}

export default Home2;
