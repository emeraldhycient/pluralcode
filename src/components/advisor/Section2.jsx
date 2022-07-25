import adv2 from "../../assets/images/adv2.png";
import GetStarted from "./GetStarted";

function Section2() {
  return (
    <div className="h-fit  w-full md:py-10 py-20 bg-[#F8F8FA]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto">
        <div className="flex justify-center items-center flex-col mb-10 md:mb-0 lg:order-last">
          <center>
            <img src={adv2} alt="" className="w-[80%]" />
          </center>
        </div>
        <div className="h-full flex justify-center flex-col">
          <div className="flex justify-center items-center flex-col mx-4">
            <h1 className="text-xl md:text-2xl font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
              Get All Your Questions Answered{" "}
            </h1>
            <p className="font-gilroyregular">
              Typically responds instantly. Book a session to get all your
              questions answered.
            </p>
          </div>
          <div className="w-[50%] lg:w-[40%] mt-4 ml-5">
            <GetStarted />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
