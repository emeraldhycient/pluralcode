import React, { useEffect } from "react";
import Hero from "../../components/visit/Hero";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/layout/Layout";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Section1 from "../../components/visit/Section1";
import Section2 from "../../components/visit/Section2";

function Visit() {
  useEffect(() => {
    document.title = `Building Solutions  For Global
    Impact`;
  }, []);

  return (
    <Layout>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <WhereMentorsWork />
      <Footer />
    </Layout>
  );
}

export default Visit;
