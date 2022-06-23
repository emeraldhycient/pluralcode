import { Link } from "react-router-dom";
import map from "../../assets/images/map.png";
import GetStarted from "./GetStarted";

function HeroSection() {
  return (
    <section className="h-[90vh] w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 md:w-11/12 mx-auto h-full w-full">
        <div
          className=" h-full flex flex-col justify-center items-left text-left w-full align-left"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="text-5xl font-bold text-[#222057] font-gilroy text-left w-full align-left text-[#232323] mb-4 leading-snug	">
            Acquire Tech Skills For a Borderless Career.
          </h1>
          <p className="font-gilroy text-[#232323] mb-8">
            Learn from elite level mentor and become a top level professional in
            the field of tech
          </p>
          <div className="flex  items-center">
            <GetStarted />
            <button className="bg-white border border-amber-500 text-amber-500 text-white px-2 py-2 rounded ml-3">
              <Link to="/advisor" className="flex items-center text-amber-500">
                Contact Student Advisor
              </Link>
            </button>
          </div>
        </div>
        <div className="" data-aos="fade-left" data-aos-duration="3000">
          <img src={map} alt="map" className="w-[95%] h-fit mt-20" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
