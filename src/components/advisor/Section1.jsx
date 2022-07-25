import adv1 from "../../assets/images/adv1.png";
import GetStarted from "./GetStarted";

function Section1() {
  return (
    <div className="h-fit  w-full md:py-10 py-20 bg-[#FFFDFA]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto">
        <div className="h-full flex justify-center flex-col">
          <div className="flex justify-center items-center flex-col mx-4">
            <h1 className="text-xl md:text-2xl font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
              Free 15min Session
            </h1>
            <p className="font-gilroyregular">
              Book a free 15 mins call to talk to our student advisors, get
              answers to all questions relating to our courses, class format,
              tuition Etc.
            </p>
          </div>
          <div className="w-[50%] lg:w-[40%] mt-4 ml-5">
            <GetStarted />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-10 md:mb-0 lg:order-first">
          <center>
            <img src={adv1} alt="" className="w-[80%]" />
          </center>
        </div>
      </div>
    </div>
  );
}

export default Section1;
