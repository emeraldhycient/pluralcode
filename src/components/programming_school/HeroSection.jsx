import { Link } from "react-router-dom";
import programming from "../../assets/images/programming.png";
import GetStarted from "./GetStarted";
import peoples from "../../assets/images/peoples.png";

function HeroSection() {
  return (
    <section className="h-fit md:h-[60vh] lg:h-fit w-screen pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className=" h-full flex flex-col md:justify-center items-left text-left w-full align-left">
          <h6
            className="text-amber-500"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Welcome to PluralCode
          </h6>
          <h1
            className="text-4xl md:text-5xl font-bold  font-gilroy  lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug	"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Programming School{" "}
          </h1>
          <p
            className="font-gilroyregular text-[16px]  lg:text-left  font-extralight text-[#232323] mb-8"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Our training is open to all without prerequisite or degree.
            PluralCode provides a 16 weeks, cutting-edge, full-time, and
            accessible web development course to help you upskill or quickly
            change careers. Our Web Development Course is intensive and
            incorporates extensive practice to help you prepare for the real
            world. You’ll learn coding by working on interactive websites that
            utilize HTML, CSS, JavaScript and more.
          </p>
        </div>
        <div
          className="col-span-"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img src={programming} alt="map" className="w-[90%] h-full" />
        </div>
      </div>
      <div className="flex justify-between items-center md:w-4/12 mx-auto z-20 -mt-8">
        <div
          className="h-32 md:h-fit w-32 bg-white border shadow shadow-xl rounded-lg w-56 mr-20 hidden md:block"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <center>
            <div className="py-1">
              <img src={peoples} alt="" className="h-8 w-[60%]" />
            </div>
          </center>
          <h6 className="text-xs text-center">200+ Learners</h6>
        </div>
        <div
          className="h-20 md:h-fit w-[80%] md:w-[100%] bg-white border shadow shadow-xl rounded-lg md:w-60 mx-auto md:mx-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <center>
            <div className="py-1">
              <img src={peoples} alt="" className="h-12 w-[60%]" />
            </div>
          </center>
          <h6 className="text-xs text-center">1000+ Students Trained</h6>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
