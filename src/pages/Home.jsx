import React from "react";
import Footer from "../components/Footer";
import BridgingGap from "../components/home/BridgingGap";
import Header from "../components/Header";
import HeroSection from "../components/home/HeroSection";
import Ourschool from "../components/home/Ourschool";
import Testimonies from "../components/home/Testimonies";
import TrainingApproach from "../components/home/TrainingApproach";
import Videobg from "../components/home/Videobg";
import WhereMentorsWork from "../components/home/WhereMentorsWork";
import Layout from "../components/layout/Layout";
import Brochure from "../components/home/Brochure";
import Press from "../components/home/Press";
import Certification from "../components/home/Certification";

function Home() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <BridgingGap />
      <Press />
      <Videobg />
      <Brochure />
      <Ourschool />
      <Testimonies />
      <TrainingApproach />
      <Certification />
      <WhereMentorsWork />
      <Footer />
    </Layout>
  );
}

export default Home;
