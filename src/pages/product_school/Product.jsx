import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/product_school/HeroSection";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Testimonies from "../../components/home/Testimonies";
import SalaryExpectation from "../../components/product_school/SalaryExpectation";

function Product() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <WhereMentorsWork />
      <Testimonies />
      <SalaryExpectation />
      <Footer />
    </Layout>
  );
}

export default Product;
