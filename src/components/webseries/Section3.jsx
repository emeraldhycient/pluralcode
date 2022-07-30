import section3 from "../../assets/images/Image.png";
import series3 from "../../assets/images/series3.svg";

import GetStarted from "./GetStarted";

function Section3() {
  return (
    <div className="h-fit  w-full md:py-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto">
        <div className="h-full flex justify-center flex-col">
          <div className="flex justify-center items-center flex-col mx-4">
            <h1
              className="text-xl md:text-2xl font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Ask Burning Questions{" "}
            </h1>
            <p
              className="font-gilroyregular"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Be a part of the conversation. Get answers to burning questions in
              your areas of interest.
            </p>
          </div>
          <div
            className="w-[50%] md:w-[20%] mt-4 ml-5"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <GetStarted />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mb-10 md:mb-0">
          <center>
            <img
              src={series3}
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

export default Section3;
