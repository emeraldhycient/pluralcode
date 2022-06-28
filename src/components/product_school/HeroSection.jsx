import { Link } from "react-router-dom";
import product from "../../assets/images/product.png";
import GetStarted from "./GetStarted";
import peoples from "../../assets/images/peoples.png";

function HeroSection() {
  return (
    <section className="h-fit w-screen pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className=" h-full flex flex-col md:justify-center items-left text-left w-full align-left">
          <h6 className="text-amber-500">Welcome to PluralCode</h6>
          <h1 className="text-4xl md:text-5xl font-bold  font-gilroy md:text-center lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug	">
            Product School
          </h1>
          <p className="font-gilroyregular text-[16px] md:text-center lg:text-left  font-extralight text-[#232323] mb-8">
            Our Product school has been designed to help students launch a
            successful career in product design (UI/UX) and Product management.
            Prepares you for jobs in manufacturing, consultancy-based design/
            management,creative industries: (graphics, marketing, research)
          </p>
        </div>
        <div className="col-span-">
          <img src={product} alt="product" className="w-[90%] h-full" />
        </div>
      </div>
      <div className="flex justify-between items-center md:w-4/12 mx-auto z-20 -mt-8">
        <div className="h-16 w-32 bg-white border shadow shadow-xl rounded-lg w-56 mr-20 hidden md:block">
          <center>
            <div className="py-1">
              <img src={peoples} alt="" className="h-8 w-[60%]" />
            </div>
          </center>
          <h6 className="text-xs text-center">200+ Learners</h6>
        </div>
        <div className="h-16 w-[80%] bg-white border shadow shadow-xl rounded-lg md:w-60 mx-auto md:mx-0">
          <center>
            <div className="py-1">
              <img src={peoples} alt="" className="h-8 w-[60%]" />
            </div>
          </center>
          <h6 className="text-xs text-center">1000+ Students Trained</h6>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
