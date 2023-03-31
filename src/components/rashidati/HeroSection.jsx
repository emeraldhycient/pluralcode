import { Link } from "react-router-dom";
import serv from "../../assets/images/serv.png";
import GetStarted from "./GetStarted";
import peoples from "../../assets/images/peoples.png";

function HeroSection() {
  return (
    <section className="h-fit md:h-[60vh] md:h-[90vh] w-screen pt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className="col-span-3  h-full flex flex-col md:justify-center items-left text-left w-full align-left w-11/12  lg:6/12 mb-10 md:mb-0">
          <h1
            className="text-4xl md:text-5xl font-bold  font-gilroy text-center md:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug	"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            RASH X
            <span className="text-[#F8991D]"> Pluralcode </span><br className="hidden lg:block"/>Tech Scholarship
          </h1>
          <p
            className="font-gilroyregular text-[16px] text-center md:text-left  font-extralight text-[#232323] mb-6"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Apply to Get a 100% scholarship to learn Product design<br className="hidden lg:block" /> or Software development. 
          </p>
          <div
            className="md:w-[30%] mx-auto md:mx-0 "
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
          <img loading='lazy' src={"https://i.im.ge/2023/03/23/D4J3XX.Group-20657.png"} alt="product" className="w-[90%] " />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
