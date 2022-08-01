import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/data_school/machine_learning/Hero";
import Videobg from "../../components/data_school/machine_learning/Videobg";
import YouWillLearn from "../../components/data_school/machine_learning/YouWillLearn";

function Machine_learning() {
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

export default Machine_learning;
