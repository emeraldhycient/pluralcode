import React from "react";
import Details from "../../components/about/Details";
import Hero from "../../components/about/Hero";
import Section1 from "../../components/about/Section1";
import Section2 from "../../components/about/Section2";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/layout/Layout";

function About() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Details />
      <Footer />
    </Layout>
  );
}

export default About;
