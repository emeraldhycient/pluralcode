import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../../components/product_school/product_design/Hero";
import Videobg from "../../../components/product_school/product_design/Videobg";
import YouWillLearn from "../../../components/product_school/product_design/YouWillLearn";

function Frontend() {
  return (
    <>
      <Header />
      <Hero />
      <YouWillLearn />
      <WhereMentorsWork />
      <Testimonies />
      <Videobg />
      <Footer />
    </>
  );
}

export default Frontend;
