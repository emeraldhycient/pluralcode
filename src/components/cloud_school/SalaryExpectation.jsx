import { Link } from "react-router-dom";
import sala from "../../assets/images/sala.png";

function SalaryExpectation() {
  return (
    <section className="h-fit w-full py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className=" mb-6" data-aos="fade-right" data-aos-duration="2000">
          <img src={sala} alt="map" className="w-[80%] md:w-[93%]  mx-auto" />
        </div>

        <div className=" h-full flex flex-col justify-center items-left text-left w-full align-left">
          <div
            className="bg-[#232323] h-16 w-60 flex justify-center items-center mb-8"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h1 className="text-2xl font-bold text-white">$80,000</h1>
          </div>
          <h4
            className="text-medium font-bold text-[#222057] font-gilroy text-left w-full align-left  mb-2 	"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            The salary of a Cloud Engineer{" "}
          </h4>
          <p
            className="text-medium font-bold text-gray-400 font-gilroy text-left w-full align-left  mb-4 	"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Source: Glassdoor{" "}
          </p>
          <h6
            className=" font-gilroyregular text-gray-500 font-light mb-8"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            The average base pay for a cloud engineer in the United States in
            December 2021 is $80,000, and can go as high as $120, 00 at senior
            level
          </h6>
        </div>
      </div>
    </section>
  );
}

export default SalaryExpectation;
