import { Link } from "react-router-dom";
import serv from "../../assets/images/serv.png";
import GetStarted from "./GetStarted";
import peoples from "../../assets/images/peoples.png";

function HeroSection() {
  return (
    <section className="h-fit md:h-[60vh] md:h-[90vh] w-screen pt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className="col-span-3  h-full flex flex-col md:justify-center items-left text-left w-full align-left">
          <h1
            className="text-4xl md:text-5xl font-bold  font-gilroy  lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug	"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Build & Launch
            <span className="text-[#F8991D]"> Scalable Products </span>With Us
          </h1>
          <p
            className="font-gilroyregular text-[16px]  lg:text-left  font-extralight text-[#232323] mb-8"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            got an idea for a website or an app? let’s build it and help you
            bring it to life
          </p>
          <div
            className="w-[30%]"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <GetStarted />
          </div>
        </div>
        <div
          className="col-span-2 flex justify-center items-center h-full"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img src={serv} alt="product" className="w-[90%] h-96" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
