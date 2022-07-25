import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schools/product" element={<Product />} />
        <Route path="/schools/product/product-design" element={<Design />} />
        <Route path="/schools/data" element={<DataSchool />} />
        <Route path="/schools/programming" element={<Programming />} />
        <Route path="/corporate-training" element={<Corporate />} />
        <Route path="/Hire-talent" element={<Hireus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/webseries" element={<Webseries />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/exclusive" element={<Exclusive />} />
        <Route path="/about" element={<About />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/mentor" element={<BecomeMentor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
