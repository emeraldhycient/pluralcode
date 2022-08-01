import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/programming_school/fullstack/Hero";
import Videobg from "../../components/programming_school/fullstack/Videobg";
import YouWillLearn from "../../components/programming_school/fullstack/YouWillLearn";

function Fullstack() {
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

export default Fullstack;
