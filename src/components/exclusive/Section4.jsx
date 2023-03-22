import series1 from "../../assets/images/series1.svg";

import GetStarted from "./GetStarted";

function Section4() {
  return (
    <div className="h-fit  w-full md:py-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto">
        <div className="h-full flex justify-center flex-col">
          <div className="flex justify-center items-center flex-col mx-4">
            <h1
              className="text-xl md:text-2xl font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 "
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Truly Exclusive{" "}
            </h1>
            <p
              className="font-gilroyregular"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Exclusive learning allows you learn on your own terms, weekday or
              weekends. Take your private tutorials, when you want it, where you
              want it.
            </p>
          </div>
          <div
            className="w-[50%] lg:w-[20%] mt-4 ml-5"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <GetStarted />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mb-10 md:mb-0">
          <center>
            <img
              src={series1}
              alt=""
              className="w-[80%]"
              data-aos="fade-left"
              data-aos-duration="2000"
            />
          </center>
        </div>
      </div>
    </div>
  );
}

export default Section4;
