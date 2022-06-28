import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="h-fit lg:h-[90vh]   bg-[#F8F8FA] py-12">
      <div
        className="w-11/12 md:w-6/12 mx-auto h-full flex flex-col justify-center items-center text-center w-full align-left mt-6 md:mt-0"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1 className="text-3xl md:text-4xl md:text-5xl font-bold  font-gilroy text-center   w-full align-left text-[#222057] mb-4 lg:leading-snug	">
          Product Design Course
        </h1>
        <p className="font-gilroyregular text-[16px] text-center   font-extralight text-[#232323] mb-4">
          Apply Your new skills to real world projects using the latest industry
          tools and techniques in Product design.
        </p>
        <h4 className="mb-4">Duration: 12 Weeks | Beginner Level</h4>
        <div className="flex flex-col md:flex-row justify-between  items-center">
          <button className="bg-amber-500 border border-amber-500  text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-full md:w-[80%] mx-auto lg:w-fit flex justify-center items-center">
            <Link to="/advisor" className="flex items-center text-white">
              Apply Now
            </Link>
          </button>
          <button className="bg-white border-[.001rem] border-slate-500 text-amber-500 text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-full md:w-[80%] mx-auto lg:w-fit flex justify-center items-center">
            <Link to="/advisor" className="flex items-center text-amber-500">
              Talk To Student Advisor
            </Link>
          </button>
          <button className="bg-white border-[.001rem] border-slate-500 text-amber-500 text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-full md:w-[80%] mx-auto lg:w-fit flex justify-center items-center">
            <Link to="/advisor" className="flex items-center text-amber-500">
              Download Brochure
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
