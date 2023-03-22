import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/cloud_school/HeroSection";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Testimonies from "../../components/home/Testimonies";
import SalaryExpectation from "../../components/cloud_school/SalaryExpectation";
import Courses from "../../components/cloud_school/Courses";

function Cloud() {
  useEffect(() => {
    document.title = "Cloud School";
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

export default Cloud;
