import { Link } from "react-router-dom";
import adv from "../../assets/images/adv.png";
import GetStarted from "./GetStarted";
import peoples from "../../assets/images/peoples.png";

function HeroSection() {
  return (
    <section className="h-fit md:h-[60vh] lg:h-[90vh] w-screen pt-12 bg-[#F8F8FA]">
      <div className="grid grid-cols-1 md:grid-cols-4 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className="col-span-2  h-full flex flex-col md:justify-center items-left text-left w-full align-left">
          <h1 className="text-4xl md:text-5xl font-bold  font-gilroy  lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-tight	">
            Talk to student advisor
          </h1>
          <p className="font-gilroyregular text-[16px]  lg:text-left  font-extralight text-[#232323] mb-8">
            Get professional counsel from our Student advisors in areas relating
            to starting a career in tech.
          </p>
          <div className="w-[60%] lg:w-[30%]">
            <GetStarted />
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center h-full pt-4">
          <img
            src={adv}
            alt="product"
            className="w-[70%] h-96 shadow rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
