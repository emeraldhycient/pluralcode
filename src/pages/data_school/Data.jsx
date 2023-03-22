import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/data_school/HeroSection";
import WhereMentorsWork from "../../components/home/WhereMentorsWork";
import Testimonies from "../../components/home/Testimonies";
import SalaryExpectation from "../../components/data_school/SalaryExpectation";
import Courses from "../../components/data_school/Courses";

function DataSchool() {
  useEffect(() => {
    document.title = "Data School";
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

export default DataSchool;
