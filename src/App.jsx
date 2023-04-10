import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ReactGA from 'react-ga';


import DataSchool from "./pages/data_school/Data";
import Home from "./pages/Home";
import Product from "./pages/product_school/Product";
import Programming from "./pages/programming_school/Programming";
import Design from "./pages/product_school/product_design/Design";
import Corporate from "./pages/corporate/Corporate";
import Hireus from "./pages/hiretalent/Hireus";
import Services from "./pages/ourservices/Services";
import Webseries from "./pages/webseries/Webseries";
import Sandbox from "./pages/sandbox/Sandbox";
import Exclusive from "./pages/exclusive/Exclusive";
import About from "./pages/about/About";
import Advisor from "./pages/advisor/Advisor";
import BecomeMentor from "./pages/becomementor/BecomeMentor";
import Data_analysis from "./pages/data_school/Data_analysis";
import Product_management from "./pages/product_school/Product_management";
import Machine_learning from "./pages/data_school/Machine_learning";
import Fullstack from "./pages/programming_school/Fullstack";
import Cloud from "./pages/cloud_school/Cloud";
import Azure from "./pages/cloud_school/azure";
import UpdatedExclusive from "./pages/UpdatedExclusive/UpdatedExclusive";
import Data_Engineering from "./pages/data_school/Data_Engineering";
import Product_marketing from "./pages/product_school/Product_marketing";
import Visit from "./pages/visit/Visit";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Fees from "./pages/tuition/Fees";
import Agile_Product_management from "./pages/agile/Product_management";
import Ambassador from "./pages/rashidat/ambassador";
import AdmissionForm from "./pages/AdmissionForm";
import VerifyCertificate from "./pages/verifyCertificate/VerifyCertificate";

function App() {
  useEffect(() => {

    // const TRACKING_ID = import.meta.env.TRACKING_ID;
    const TRACKING_ID = "G-ENN8FT3NTB"
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID)
    } else {
      console.log("TRACKING_ID", TRACKING_ID)
    }
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificate-courses" element={<Home2 />} />
        <Route path="/professional-diploma" element={<Home3 />} />
        <Route path="/diploma" element={<Home3 />} />
        <Route path="/schools/product" element={<Product />} />
        <Route path="/schools/product/product-design" element={<Design />} />
        <Route
          path="/schools/product/product-management"
          element={<Product_management />}
        />
        <Route
          path="/schools/product/product-marketing"
          element={<Product_marketing />}
        />
        <Route path="/schools/data" element={<DataSchool />} />
        <Route
          path="/schools/data/data-analytics"
          element={<Data_analysis />}
        />
        <Route
          path="/schools/data/data-science"
          element={<Machine_learning />}
        />
        <Route
          path="/schools/data/data-engineering"
          element={<Data_Engineering />}
        />
        <Route path="/schools/programming" element={<Programming />} />
        <Route
          path="/schools/programming/frontend-development"
          element={<Fullstack />}
        />
        <Route
          path="/schools/programming/backend-development"
          element={<Fullstack />}
        />{" "}
        <Route
          path="/schools/programming/fullstack-development"
          element={<Fullstack />}
        />{" "}
        <Route path="/schools/cloud" element={<Cloud />} />
        <Route path="/schools/cloud/azure" element={<Azure />} />
        <Route path="/schools/cloud/Agile-Product-Management" element={<Agile_Product_management />} />
        <Route path="/corporate-training" element={<Corporate />} />
        <Route path="/Hire-talent" element={<Hireus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/webseries" element={<Webseries />} />
        <Route path="/sandbox" element={<Sandbox />} />
        {/*
        <Route path="/exclusive" element={<Exclusive />} />
  */}
        <Route path="/exclusive" element={<UpdatedExclusive />} />
        <Route path="/about" element={<About />} />
        <Route path="/advisors" element={<Advisor />} />
        <Route path="/mentor" element={<BecomeMentor />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/tuition-fees" element={<Fees />} />
        <Route path="/rasheedat-scholarship" element={<Ambassador />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
