import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/layout/Layout";
import Clients from "../../components/Ourservices/clients";
import HeroSection from "../../components/rashidati/HeroSection";
import Projects from "../../components/Ourservices/Projects";
import Section2 from "../../components/Ourservices/Section2";
import Section3 from "../../components/Ourservices/Section3";
import Ourschool from "../../components/rashidati/Ourschool";
import About from "../../components/rashidati/about";
import ApplicationProcess from "../../components/rashidati/applicationProcess";
import FormSection from "../../components/rashidati/formSection";

function Ambassador() {
    useEffect(() => {
        document.title = "Apply to Get a 100% scholarship to learn Product design or Software development. ";
    }, []);

    return (
        <Layout>
            <Header />
            <HeroSection />
            <Ourschool />
            <About />
            <ApplicationProcess />
            <FormSection/>
            <Footer />
        </Layout>
    );
}

export default Ambassador;
