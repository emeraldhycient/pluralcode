import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/programming_school/HeroSection";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Testimonies from "../../components/home/Testimonies";
import SalaryExpectation from "../../components/programming_school/SalaryExpectation";
import Courses from "../../components/programming_school/Courses";

function Programming() {
  useEffect(() => {
    document.title = "software development school";
  }, []);

  return (
    <Layout>
      <Header />
      <HeroSection />
      <WhereMentorsWork />
      <Courses />
      <Testimonies />
      <SalaryExpectation />
      <Footer />
    </Layout>
  );
}

export default Programming;
