import series1 from "../../assets/images/series1.svg";
import GetStarted from "./GetStarted";

function Section1() {
  return (
    <div className="h-fit  w-full md:py-20 py-20 bg-[#F8F8FA]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto">
        <div className="h-full flex justify-center flex-col">
          <div className="flex justify-center items-center flex-col mx-4">
            <h1 className="text-xl md:text-2xl font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
              Stay Up to Date{" "}
            </h1>
            <p className="font-gilroyregular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Adipiscing.
            </p>
          </div>
          <div className="w-[50%] md:w-[20%] mt-4 ml-5">
            <GetStarted />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mb-10 md:mb-0">
          <center>
            <img src={series1} alt="" className="w-[80%]" />
          </center>
        </div>
      </div>
    </div>
  );
}

export default Section1;
