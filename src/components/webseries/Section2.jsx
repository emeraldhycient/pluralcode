import series2 from "../../assets/images/series2.svg";
import GetStarted from "./GetStarted";

function Section2() {
  return (
    <div className="h-fit  w-full md:py-20 py-20 bg-[#FFFAF2]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto">
        <div className="flex justify-center items-center flex-col mb-10 md:mb-0">
          <center>
            <img src={series2} alt="" className="w-[80%]" />
          </center>
        </div>
        <div className="h-full flex justify-center flex-col">
          <div className="flex justify-center items-center flex-col mx-4">
            <h1 className="text-xl md:text-2xl font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
              World-Class Guests{" "}
            </h1>
            <p className="font-gilroyregular">
              Learn from high profile guests across all areas of the tech
              industry.
            </p>
          </div>
          <div className="w-[50%] md:w-[20%] mt-4 ml-5">
            <GetStarted />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
