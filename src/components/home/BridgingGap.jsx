import { useState } from "react";
import { Link } from "react-router-dom";
import group33 from "../../assets/images/group33.png";
import group34 from "../../assets/images/CAMPURSE.png";
import group35 from "../../assets/images/IMPACT.png";
import spiral from "../../assets/images/spiral.png";
import GetStarted from "./GetStarted";
import Carousel from "react-material-ui-carousel";

function BridgingGap() {
  const [gaps, setgaps] = useState([
    {
      id: 1,
      title: "For Individuals",
      description:
        "A bridging gap is a gap between two or more skills that can be bridged to create a new skill. It is a way to create a new skill from existing skills.",
      image: group33,
      link: "/bridging-gap",
    },
    {
      id: 2,
      title: "For Organizations",
      description:
        "Suitable for corporate Organizations who wants to train employees for joint corporate development",
      image: group34,
      link: "/bridging-gap",
    },
    {
      id: 3,
      title: "Impact (CSR)",
      description:
        "Impacting the extensive knowledge tech for a sustainable career development.",
      image: group35,
      link: "/bridging-gap",
    },
  ]);

  return (
    <section className="h-fit lg:h-[120vh] py-10 w-screen bg-white mt-10 md:mt-0">
      <center data-aos="zoom-in-up" data-aos-duration="1200">
        <h1 className="text-3xl md:text-4xl font-medium text-[#222057] font-gilroy text-center w-full align-left text-[#232323] mb-10 md:mb-20 leading-snug	">
          Bridging Africa’s Talent Gap
        </h1>{" "}
      </center>
      <Carousel next={(next, active) => {}} prev={(prev, active) => {}}>
        {gaps.map((gap) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 w-11/12 md:w-10/12  mx-auto h-full w-full"
            key={gap.id}
          >
            <div
              className="md:col-span-2 mb-4 md:mb-0"
              style={{
                background: `url(${spiral}) no-repeat center center `,
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1800"
            >
              <img src={gap.image} alt="map" className="w-full md:w-[80%] " />
            </div>

            <div
              className=" h-full flex flex-col justify-center  text-left w-full align-left"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h1 className="text-[36px] font-extralight text-[#222057] font-gilroymedium text-center md:text-left w-full align-left text-[#232323] mb-4 leading-snug	">
                {gap.title}
              </h1>
              <p className="font-gilroyregular text-[16px] font-extralight text-[#232323] mb-8">
                {gap.description}
              </p>
              <div className="">
                <button className="text-[#222057] px-2 py-2 rounded  font-bold">
                  <Link to={gap.link} className="flex items-center">
                    Get Started
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default BridgingGap;
