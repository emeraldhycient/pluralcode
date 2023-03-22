import React, { useEffect } from "react";
import Book from "../../components/advisor/Book";
import HeroSection from "../../components/advisor/HeroSection";
import Section1 from "../../components/advisor/Section1";
import Section2 from "../../components/advisor/Section2";
import Section3 from "../../components/advisor/Section3";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/layout/Layout";

function Advisor() {
  useEffect(() => {
    document.title = "Talk to student advisor    ";
  }, []);

  return (
    <Layout>
      <Header />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Book />
      <Footer />
    </Layout>
  );
}

export default Advisor;
