import { Link } from "react-router-dom";
import product from "../../assets/images/product.png";
import cop from "../../assets/images/cop.png";

function HeroSection() {
  return (
    <section className="h-fit w-screen pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className=" h-full flex flex-col md:justify-center items-left text-left w-full align-left">
          <h6 className="text-amber-500">Get Your Staff SkilledUp With</h6>
          <h1 className="text-4xl md:text-5xl font-bold  font-gilroy md:text-center lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug	">
            Our Corporate Training{" "}
          </h1>
          <p className="font-gilroyregular text-[16px] md:text-center lg:text-left  font-extralight text-[#232323] mb-8">
            Your employees deserve the best training programs out there. Our
            corporate training program is designed to educate employees. While
            it helps employers, it is also beneficial for employees as it helps
            them obtain and hone knowledge and skills to progress professionally
            and personally.
          </p>
          <button className="bg-amber-500 text-white px-2 py-2 rounded w-44 text-center">
            <Link
              to="/create-account"
              className="flex text-center justify-center items-center w-full"
            >
              Get Started
            </Link>
          </button>
        </div>
        <div className="col-span- pb-2 mt-8 md:mt-0 flex justify-center items-center pt-6 md:pt-16">
          <center>
            <img
              src={cop}
              alt="corporate training"
              className="w-[95%] md:w-[80%] h-[90%]"
            />
          </center>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
