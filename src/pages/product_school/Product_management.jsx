import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonies from "../../components/home/Testimonies";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Hero from "../../components/product_school/product_management/Hero";
import Videobg from "../../components/product_school/product_management/Videobg";
import YouWillLearn from "../../components/product_school/product_management/YouWillLearn";

function Product_management() {
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

export default Product_management;
