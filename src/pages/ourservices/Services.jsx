import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/layout/Layout";
import Clients from "../../components/Ourservices/clients";
import HeroSection from "../../components/Ourservices/HeroSection";
import Projects from "../../components/Ourservices/Projects";
import Section2 from "../../components/Ourservices/Section2";
import Section3 from "../../components/Ourservices/Section3";

function Services() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <Clients />
      <Section2 />
      {/*
        <Projects />
        */}
      <Section3 />
      <Footer />
    </Layout>
  );
}

export default Services;
