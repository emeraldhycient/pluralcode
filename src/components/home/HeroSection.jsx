import { Link } from "react-router-dom";
import ellipse1 from "../../assets/images/Ellipse 1.png";
import ellipse2 from "../../assets/images/Ellipse 4.png";
import ellipse3 from "../../assets/images/Ellipse 5.png";
import ellipse4 from "../../assets/images/Ellipse 6.png";
import ellipse5 from "../../assets/images/Ellipse 7.png";
import "./hero.css";
import GetStarted from "./GetStarted";

import { Tooltip } from "flowbite-react";

function HeroSection() {
  return (
    <section className="h-fit lg:h-[90vh] w-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full md:w-11/12 mx-auto h-full w-full">
        <div
          className=" h-full flex flex-col justify-center items-left text-left w-full align-left mt-6 md:mt-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="text-4xl md:text-5xl font-bold  font-gilroy text-center lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug	">
            Acquire <span className="text-amber-500">Tech Skills</span> For a
            Borderless Career.
          </h1>
          <p className="font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-8">
            Your global tech journey begins here. Master the skills you need to
            start <br className="hidden lg:block" />a successful career.
          </p>
          <div className="flex flex-col lg:flex-row  items-center">
            <GetStarted />
            <button className="bg-white border border-amber-500 text-amber-500 text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-[80%] mx-auto lg:w-fit flex justify-center items-center">
              <Link to="/advisor" className="flex items-center text-amber-500">
                Contact Student Advisor
              </Link>
            </button>
          </div>
        </div>
        <div
          className="map order-first lg:order-last"
          data-aos="fade-left"
          data-aos-duration="3000"
        ></div>
      </div>
    </section>
  );
}

export default HeroSection;
