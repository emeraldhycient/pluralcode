import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/webseries/HeroSection";
import Section3 from "../../components/webseries/Section3";
import Section1 from "../../components/webseries/Section1";
import Videobg from "../../components/webseries/Videobg";
import Section2 from "../../components/webseries/Section2";
function Webseries() {
  useEffect(() => {
    document.title =
      "Join Our Weekly Webinar Series as we Talk Tech & Careers  ";
  }, []);

  return (
    <Layout>
      <Header />
      <HeroSection />
      <Videobg />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Layout>
  );
}

export default Webseries;
