import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/data_school/data_analysis/Hero";
import Videobg from "../../components/data_school/data_analysis/Videobg";
import YouWillLearn from "../../components/data_school/data_analysis/YouWillLearn";

function Data_analysis() {
  return (
    <>
      <Header />
      <Hero />
      <Videobg />
      <YouWillLearn />
      <WhereMentorsWork />
      <Testimonies />
      <Footer />
    </>
  );
}

export default Data_analysis;
