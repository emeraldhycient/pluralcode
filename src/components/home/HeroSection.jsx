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
          <h1 className="text-4xl md:text-5xl font-bold text-[#222057] font-gilroy text-center lg:text-left  w-full align-left text-[#232323] mb-4 lg:leading-snug	">
            Acquire <span className="text-amber-500">Tech Skills</span> For a
            Borderless Career.
          </h1>
          <p className="font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-8">
            Learn from elite level mentor and become a top level{" "}
            <br className="hidden lg:block" />
            professional in the field of tech
          </p>
          <div className="flex flex-col lg:flex-row  items-center">
            <GetStarted />
            <button className="bg-white border border-amber-500 text-amber-500 text-white px-2 py-2 rounded mt-3 lg:mt-0 lg:ml-3 w-[80%] mx-auto lg:w-fit flex justify-center items-center">
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
        >
          <div
            className="border-2 border-amber-500 h-8 w-8 ring-2 ring-amber-500 rounded-full hidden lg:block"
            style={{
              position: "absolute",
              top: "50%",
              left: "80%",
            }}
          >
            <Tooltip content="Tooltip content" placement="right" style="dark">
              <img src={ellipse1} alt="" />
            </Tooltip>
          </div>
          <div
            className="border-2 border-amber-500 h-8 w-8 ring-2 ring-amber-500 rounded-full hidden lg:block"
            style={{
              position: "absolute",
              top: "40%",
              left: "60%",
            }}
          >
            <Tooltip content="Tooltip content" placement="right" style="dark">
              <img src={ellipse2} alt="" />
            </Tooltip>
          </div>
          <div
            className="border-2 border-amber-500 h-8 w-8 ring-2 ring-amber-500 rounded-full hidden lg:block"
            style={{
              position: "absolute",
              top: "55%",
              left: "60%",
            }}
          >
            <Tooltip content="Tooltip content" placement="right" style="dark">
              <img src={ellipse3} alt="" />
            </Tooltip>
          </div>
          <div
            className="border-2 border-amber-500 h-8 w-8 ring-2 ring-amber-500 rounded-full hidden lg:block"
            style={{
              position: "absolute",
              top: "40%",
              left: "90%",
            }}
          >
            <Tooltip content="Tooltip content" placement="right" style="dark">
              <img src={ellipse4} alt="" className="" />
            </Tooltip>
          </div>
          <div
            className="border-2 border-amber-500 h-8 w-8 ring-2 ring-amber-500 rounded-full hidden lg:block"
            style={{
              position: "absolute",
              top: "62%",
              left: "74%",
            }}
          >
            <Tooltip content="Tooltip content" placement="right" style="dark">
              <img src={ellipse5} alt="" />
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
