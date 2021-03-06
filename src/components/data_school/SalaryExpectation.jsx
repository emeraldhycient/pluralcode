import { Link } from "react-router-dom";
import sala from "../../assets/images/sala.png";

function SalaryExpectation() {
  return (
    <section className="h-fit w-full py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className=" mb-6">
          <img
            src={sala}
            alt="map"
            className="w-[90%] md:w-[80%] h-56 md:h-96 mx-auto"
          />
        </div>

        <div className=" h-full flex flex-col justify-center items-left text-left w-full align-left">
          <div className="bg-[#232323] h-16 w-60 flex justify-center items-center mb-8">
            <h1 className="text-2xl font-bold text-white">$100,000</h1>
          </div>
          <h4 className="text-medium font-bold text-[#222057] font-gilroy text-left w-full align-left  mb-2 	">
            The average salary of a Product Manager{" "}
          </h4>
          <h4 className="text-medium font-bold text-gray-400 font-gilroy text-left w-full align-left  mb-4 	">
            Source: Glassdoor{" "}
          </h4>
          <h6 className=" font-gilroyregular text-gray-500 font-light mb-8">
            In the Us you can earn up to $100,00 working remotely as a product
            manager. The average Product manager earns between N250,00-N500,000
            per month in the Nigerian Tech market.
          </h6>
          <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded w-fit  lg:mx-0 lg:w-fit flex justify-center items-center">
            <Link to="" className="flex items-center">
              Learn More
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SalaryExpectation;
