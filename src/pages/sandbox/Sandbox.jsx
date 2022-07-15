import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/layout/Layout";
import Captures from "../../components/sandbox/Captures";
import Hero from "../../components/sandbox/Hero";
import Projects from "../../components/sandbox/Projects";

function Sandbox() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Captures />
      <Projects />
      <Footer />
    </Layout>
  );
}

export default Sandbox;
