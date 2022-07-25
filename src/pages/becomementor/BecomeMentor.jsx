import React from "react";
import HeroSection from "../../components/becomementor/HeroSection";
import Captures from "../../components/becomementor/Captures";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/layout/Layout";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import TrainingApproach from "../../components/becomementor/TrainingApproach";
import Section2 from "../../components/becomementor/Section2";

function BecomeMentor() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <Captures />
      <WhereMentorsWork />
      <Section2 />
      <TrainingApproach />
      <Footer />
    </Layout>
  );
}

export default BecomeMentor;
