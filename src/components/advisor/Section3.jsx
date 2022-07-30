import section3 from "../../assets/images/Image.png";
import adv3 from "../../assets/images/adv3.png";

import GetStarted from "./GetStarted";

function Section3() {
  return (
    <div className="h-fit  w-full md:py-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto">
        <div className="h-full flex justify-center flex-col">
          <div className="flex justify-center items-center flex-col mx-4">
            <h1
              className="text-xl md:text-2xl font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 "
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              Physical or Virtual Session{" "}
            </h1>
            <p
              className="font-gilroyregular"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              Book a phone call, google meet for virtual session, or walk into
              our training center to meet any of our advisors in person. We
              can't wait to meet you!
            </p>
          </div>
          <div
            className="w-[50%] lg:w-[40%] mt-4 ml-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <GetStarted />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mb-10 md:mb-0 order-first">
          <center>
            <img
              src={adv3}
              alt=""
              className="w-[80%]"
              data-aos="fade-right"
              data-aos-duration="2000"
            />
          </center>
        </div>
      </div>
    </div>
  );
}

export default Section3;
