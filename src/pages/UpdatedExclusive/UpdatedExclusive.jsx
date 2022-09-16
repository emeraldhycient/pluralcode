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
      title: "Are trainings online?",
      content: `Trainings are both physical and virtual.`,
      isActive: false,
    },
    {
      title: "Can I mentored in my house ?",
      content:
        " Trainings are generally taken at our training centres, but home tutorials attract more fees        .",
      isActive: false,
    },
    {
      title: "Can I pay in installments? ",
      content: "Yes payments on installments are allowed.",
      isActive: false,
    },
    {
      title: "How long are programs under the exclusive option",
      content:
        "Training durations can vary from 2 - 6 months depending on the program. Contact us to find out more",
      isActive: false,
    },
    {
      title: "Do you have certified mentors?",
      content:
        "Our mentors are industry professionals who are tested and trusted        ",
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
