import React from "react";
import HeroSection from "../../components/Hireus/HeroSection";
import Section2 from "../../components/Hireus/Section2";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";

function Hireus() {
  return (
    <section>
      <Header />
      <HeroSection />
      <Section2 />
      <Testimonies />
      <Footer />
    </section>
  );
}

export default Hireus;
