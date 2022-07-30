import { Link } from "react-router-dom";
import exclusive from "../../assets/images/exclusive.png";
import GetStarted from "./GetStarted";
import peoples from "../../assets/images/peoples.png";

function HeroSection() {
  return (
    <section className="h-fit md:h-[60vh] lg:h-[90vh] w-screen pt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className="col-span-3  h-full flex flex-col md:justify-center items-left text-left w-full align-left">
          <h1
            className="text-4xl md:text-5xl font-bold  font-gilroy  lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-tight	"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <span className="text-[#F8991D]">Get A Private Tutor</span> & Learn
            On Your Own Terms
          </h1>
          <p
            className="font-gilroyregular text-[16px]  lg:text-left  font-extralight text-[#232323] mb-8"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Our exclusive tutorial gives you access to a private tutor, with
            quality one on one mentorship, fewer distractions, greater learning
            and focus
          </p>
          <div
            className="w-[30%]"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <GetStarted />
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center h-full">
          <img
            src={exclusive}
            alt="product"
            className="w-[90%] h-96"
            data-aos="fade-right"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
