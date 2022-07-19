import React from "react";
import Layout from "../../components/layout/Layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/exclusive/HeroSection";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Testimonies from "../../components/home/Testimonies";
import Section1 from "../../components/exclusive/Section1";
import Section2 from "../../components/exclusive/Section2";
import Section3 from "../../components/exclusive/Section3";
import Section4 from "../../components/exclusive/Section4";
import Hire from "../../components/exclusive/Hire";

function Exclusive() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <WhereMentorsWork />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Testimonies />
      <Hire />
      <Footer />
    </Layout>
  );
}

export default Exclusive;
