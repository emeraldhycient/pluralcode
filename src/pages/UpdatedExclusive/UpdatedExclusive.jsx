import React, { useState } from "react";
import Footer from "../../components/Footer";
import GetMentored from "../../components/UpdatedExclusive/GetMentored";
import GettingStarted from "../../components/UpdatedExclusive/GettingStarted";
import Herosection from "../../components/UpdatedExclusive/Herosection";
import Videobg from "../../components/UpdatedExclusive/Videobg";
import Faq from "../../components/Faq";
import WhatWeDo from "../../components/UpdatedExclusive/WhatWeDo";
import Benefits from "../../components/UpdatedExclusive/Benefits";
import BeforeFooter from "../../components/UpdatedExclusive/BeforeFooter";

function UpdatedExclusive() {
  const [faqs, setfaqs] = useState([
    {
      title:
        "What is the difference between a front end developer and a back end developer",
      content: `Front-end developers are responsible for the website’s appearance, its “look and feel.” They are in charge of things like color schemes, font styles and the general layout
    
          Back-end developers are responsible for tasks such as database management and website security. They are also responsible for integrating third-party services with a site, such as social media platforms or payment gateways.`,
      isActive: false,
    },
    {
      title:
        "Do I need to have a knowledge of coding to learn Web development.      ",
      content:
        "As much as it is Important, we run a beginner friendly model at PluralCode. Hence you learn from scratch.",
      isActive: false,
    },
    {
      title:
        "What's the program duration for Full stack web development       ",
      content:
        "28 weeks inclusive of two captstone projects for portfolio development.      ",
      isActive: false,
    },
    {
      title: "Can I pay in installments?      ",
      content:
        "Yes, we have an installments option, where you pay 50% initial fee and spread the great through the first two months of the program       ",
      isActive: false,
    },
    {
      title: "Are Certificates awarded at the end of the program?      ",
      content:
        "Yes, Certificate of completion is awarded at the end of all our programs.",
      isActive: false,
    },
    {
      title: "What is required of me to start a class.      ",
      content:
        "A working laptop, a note pad and the willingness to start to finish.",
      isActive: false,
    },
  ]);

  return (
    <section>
      <Herosection />
      <GetMentored />
      <Videobg />
      <GettingStarted />
      <Benefits />
      <WhatWeDo />
      <Faq faqs={faqs} setfaqs={setfaqs} />
      <BeforeFooter />
      <Footer />
    </section>
  );
}

export default UpdatedExclusive;
