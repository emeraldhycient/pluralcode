import { Link } from "react-router-dom";
import "./hero.css";
import ScrollIntoView from 'react-scroll-into-view'
import useAnalyticsEventTracker from "../../services/analytics/useAnalyticsEventTracker";

function HeroSection() {
  const gaEventTracker = useAnalyticsEventTracker('ads landing page');


  return (
    <section className="h-fit pb-20  lg:h-screen w-screen">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 w-full md:w-11/12 mx-auto h-full w-full">
        <div
          className="col-span-2 h-fit lg:h-screen flex flex-col justify-center items-center text-left w-full align-left mt-6 lg:-mt-8"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="w-[85%] md:w-[100%] mx-auto text-3xl md:text-5xl font-bold  font-gilroy text-center lg:text-left  w-full align-left text-[#222057] mb-3 lg:leading-tight	">
            Earn A Professional <span className="text-amber-500">Tech Diploma </span>
          </h1>
          <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
            Our internationally accredited Diploma is designed to <br className="hidden lg:block" /> help you stand out as an expert in a crowded tech space.
          </p>
         
          <div className="w-full">
            <button onClick={() => gaEventTracker('click', "clicked on enroll now")} className="bg-amber-500 text-[12px] text-white px-3 md:px8 py-2 rounded w-[81.5%]  flex justify-center items-center mx-auto lg:mx-0 w-[70%] md:w-[40%] lg:w-[35%]">
              <ScrollIntoView selector="#schools">
                <a
                  className="flex items-center"
                >
                 Apply Now
                </a>
              </ScrollIntoView>
            </button>
         
          </div>
        </div>
        <div
          className="col-span-3 map order-first lg:order-last   w-full h-full justify-center items-center pt-20 px-6 md:px-2"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <img src={"https://i.im.ge/2023/03/06/7Pfk9K.Frame-60955.png"} className="lg:h-[60%] mx-auto md:mb-10 lg:mb-3" alt="" />
        </div>
       
      </div>
    </section>
  );
}

export default HeroSection;
