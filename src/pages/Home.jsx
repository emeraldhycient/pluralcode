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
import Header2 from "../components/Header2";

function Home() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <BridgingGap />
      <Videobg />
      <Ourschool />
      <Testimonies />
      <TrainingApproach />
      <WhereMentorsWork />
      <Footer />
    </Layout>
  );
}

export default Home;
