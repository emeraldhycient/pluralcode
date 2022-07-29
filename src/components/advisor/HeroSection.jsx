import { useState } from "react";
import adv from "../../assets/images/adv.png";
import GetStarted from "./GetStarted";
import "./modal.css";
import ModalVideo from "./ModalVideo";

function HeroSection() {
  const [isOpen, setOpen] = useState(false);

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
          <div className="w-[70%] lg:w-[40%]">
            <GetStarted />
          </div>
        </div>
        {!isOpen && (
          <div className="col-span-2 flex justify-center items-center h-full pt-4">
            <img
              src={adv}
              alt="product"
              className="w-[70%] h-96 shadow rounded-full"
              onClick={(e) => setOpen(!isOpen)}
            />
          </div>
        )}
        {isOpen && (
          <div className="col-span-2 flex justify-center items-center h-full rounded-lg">
            <ModalVideo
              setOpen={setOpen}
              video_url="https://res.cloudinary.com/gofitish/video/upload/v1659096995/videos/VID-20220729-WA0008_apjpm1.mp4"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
