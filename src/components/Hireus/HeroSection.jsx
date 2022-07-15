import { Link } from "react-router-dom";
import hirehero from "../../assets/images/hirehero.png";

function HeroSection() {
  return (
    <section className="h-fit md:h-screen pt-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div
          className=" h-full flex flex-col justify-center items-left text-left w-full align-left mt-6 md:mt-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="text-4xl md:text-5xl font-bold  font-gilroy text-center lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug mt-20	">
            Build a <span className="text-amber-500">World-Class </span>
            Team From Our Talents
          </h1>
          <p className="font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-8">
            Learn from elite level mentor and become a top level{" "}
            <br className="hidden lg:block" />
            professional in the field of tech
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
        <div className="col-span- pb-2 mt-8 md:mt-0">
          <center>
            <img
              src={hirehero}
              alt="corporate training"
              className="w-[95%] md:w-[75%] h-full"
            />
          </center>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
