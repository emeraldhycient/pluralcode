import { Link } from "react-router-dom";
import "./hero.css";
import GetStarted from "./GetStarted";
import Lottie from "react-lottie";
import animationData from "../../assets/Pluralcode raw-03.json";

// import { Tooltip } from "flowbite-react";

function HeroSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="h-fit lg:h-[90vh] w-screen">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 w-full md:w-11/12 mx-auto h-full w-full">
        <div
          className="col-span-2 h-full flex flex-col justify-center items-left text-left w-full align-left mt-6 md:mt-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="w-[85%] md:w-[100%] mx-auto text-3xl md:text-5xl font-bold  font-gilroy text-center lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug	">
            Acquire Tech Skills For a <span className="text-amber-500">Borderless Career.</span>
          </h1>
          <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-8">
            Your global tech journey begins here. Master the skills you need{" "}
            <br className="hidden lg:block" /> to start a successful career.
          </p>
          <div className="w-[100%] md:w-[80%] mb-4 md:mb-4 mx-auto md:mx-auto lg:mx-0">
            <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded w-[81.5%] mx-auto lg:mx-0  flex justify-center items-center">
              <a
                href="https://student.pluralcode.institute" className="flex items-center"
              >
                Get Started
              </a>
            </button>
          </div>
          <div className="md:flex w-[80%] md:w-[65%] mx-auto md:mx-auto lg:mx-0  justify-between gap-4">
            <button className="bg-white border border-amber-500 text-amber-500 text-white px-4 py-2 text-[12px] rounded w-full flex justify-center items-center mb-4 md:mb-0">
              <a href="https://play.google.com/store/apps/details?id=com.pluralcodeacademy" target="_blank" className="flex items-center text-amber-500">
                <img src="https://i.im.ge/2022/11/27/SiC2ky.image-80.png" alt="" />
                Get on Android
              </a>
            </button>
            <button className="bg-white border border-amber-500 text-amber-500 text-white px-4 py-2 text-[12px] rounded w-full flex justify-center items-center">
              <a href="" className="flex items-center text-amber-500">
                <img src="https://i.im.ge/2022/11/27/SiCsR6.ant-design-apple-filled.png" alt="" />
                Get on iPhone
              </a>
            </button>
          </div>
        </div>
        <div
          className="col-span-3 map order-first lg:order-last hidden md:block lg:hidden pt-16 "
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <Lottie options={defaultOptions} />
        </div>
        <div
          className="col-span-3 map order-first lg:order-last hidden lg:block pt-16 "
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <Lottie options={defaultOptions} width={620} />
        </div>
        <div
          className="map order-first lg:order-last block md:hidden pt-12"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <Lottie options={defaultOptions} height={390} width={380} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
