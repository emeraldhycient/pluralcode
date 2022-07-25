import { Link } from "react-router-dom";
import webseries from "../../assets/images/webseries.svg";
import GetStarted from "./GetStarted";
import peoples from "../../assets/images/peoples.png";

function HeroSection() {
  return (
    <section className="h-fit md:h-[55vh] lg:h-[90vh] w-screen pt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className="col-span-3  h-full flex flex-col md:justify-center items-left text-left w-full align-left">
          <h1 className="text-4xl md:text-5xl font-bold  font-gilroy  lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-tight	">
            Join Our Weekly Webinar Series as we{" "}
            <span className="text-[#F8991D]">Talk Tech & Careers </span>
          </h1>
          <p className="font-gilroyregular text-[16px]  lg:text-left  font-extralight text-[#232323] mb-8">
            We have a weekly 1 hour session where we bring professional guests
            to talk tech. Click to get invite.
          </p>
          <div className="w-[30%]">
            <GetStarted />
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center h-full">
          <img src={webseries} alt="product" className="w-[90%] h-96" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
