import React, { useEffect } from "react";
import HeroSection from "../../components/corporate/HeroSection";
import Section2 from "../../components/corporate/Section2";
import Section3 from "../../components/corporate/Section3";
import Section4 from "../../components/corporate/Section4";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";

function Corporate() {
  useEffect(() => {
    document.title = " Get Your Staff SkilledUp With  Our Corporate Training";
  }, []);

  return (
    <section>
      <Header />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Testimonies />
      <Footer />
    </section>
  );
}

export default Corporate;
