import { Link } from "react-router-dom";
import data from "../../assets/images/data.png";
import GetStarted from "./GetStarted";

function HeroSection() {
  return (
    <section className="h-fit w-screen pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className=" h-full flex flex-col justify-center items-left text-left w-full align-left">
          <h6 className="text-amber-500">Welcome to PluralCode</h6>
          <h1 className="text-5xl font-bold text-[#222057] font-gilroy text-left w-full align-left text-[#232323] mb-4 leading-snug	">
            Product School
          </h1>
          <h6 className="font-gilroy text-gray-500 font-light mb-8">
            Our Product school has been designed to help students launch a
            successful career in product design (UI/UX) and Product management.
            Prepares you for jobs in manufacturing, consultancy-based design/
            management,creative industries: (graphics, marketing, research)
          </h6>
        </div>
        <div className="col-span-">
          <img src={data} alt="data" className="w-[90%] h-full" />
        </div>
      </div>
      <div className="flex justify-between items-center md:w-4/12 mx-auto z-20 -mt-8">
        <div className="h-16 w-32 bg-white border shadow shadow-xl rounded-lg w-56 mr-20">
          <div className="py-3"></div>
          <h6 className="text-xs text-center">200+ Learners</h6>
        </div>
        <div className="h-16 w-32 bg-white border shadow shadow-xl rounded-lg w-60">
          <div className="py-3"></div>
          <h6 className="text-xs text-center">1000+ Students Trained</h6>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
