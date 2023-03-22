import { useState } from "react";
import Card from "./Card";
import ScrollIntoView from 'react-scroll-into-view'


function Section3() {

  const [reasons, setreasons] = useState([
    {
      title: "Step One",
      title2: "Book a Session",
      description:
        "click here Select the course you are interested in and speak with the Student Advisor for 5 - 10 minutes to get all the relevant information about the program",
      style: "bg-[#2220570D]",
      textStyle: "text-[#222057]",
      textStyle2: "text-[#F8991D]",
      image: "https://i.im.ge/2023/02/08/aw7WbT.image-7-1.png",
    },
    {
      title: "Step Two",
      title2: "Enrollment Guide",
      description:
        "After your session, you will be walked through the process of enrollment, payment plans, self-paced study pack and calendar for instructor-led classes.",
      style: "bg-[#F8991D1A]",
      textStyle: "text-[#F8991D]",
      textStyle2: "text-[#222057]",
      image: "https://i.im.ge/2023/02/08/awDTpX.image-7-2.png",
    },
    {
      title: "Step Three",
      title2: "Pay Tuition ",
      description:
        "Once you pay tuition, you will be forwarded all necessary course materials, a welcome pack, and an invite into the course community on slack where you join other students.",
      style: "",
      textStyle: "text-[#222057]",
      textStyle2: "text-[#F8991D]",
      image: "https://i.im.ge/2023/02/08/awDd7q.image-7-3.png",
    },
    {
      title: "Step Four",
      title2: "You Are All Set! ",
      description:
        "Take full advantage a world class training program and a community of like minds.",
      style: "bg-[#2220570D]",
      textStyle: "text-[#F8991D]",
      textStyle2: "text-[#222057]",
      image: "https://i.im.ge/2023/02/08/awD62x.image-7-4.png",
    },
  ]);

  return (
    <div className="h-fit  w-full w-screen pt-10 md:pt-0 bg-[#FFFDFA] pb-20 flex flex-col justify-center items-center">
      <h1 className="text-[30px] font-semibold text-center text-[#222057] mb-2 md:mb-10 pt-10">
        How to enroll?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-11/12 md:w-10/12 mx-auto mt-8">
        {/* {reasons.map((reason, index) => (
          <Card key={index} reason={reason} />
        ))} */}
        <div
          className="grid grid-cols-2 h-fit mb-4"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div
            className={`bg-[#EDEDF2]  flex justify-center items-left flex-col p-3   order-first rounded-l-[24px] `}
          >
            <h1 className={`text-[#222057] font-semibold text-lg mb-3`}>Step One</h1>
            <h2 className={`text-[#F8991D] font-semibold text-[14px]`}>Book a Session</h2>
            <p className="text-sm text-left mt-1 font-gilroyregular">
              <ScrollIntoView selector="#schools"><span className="text-amber-500">click here </span></ScrollIntoView> Select the course you are interested in and speak with the Student Advisor for 5 - 10 minutes to get all the relevant information about the program
            </p>
          </div>
          <div className="">
            <img src={"https://i.im.ge/2023/02/08/aw7WbT.image-7-1.png"} alt="" className={`h-full  w-[80%]   rounded-r-[24px] `} />
          </div>
        </div>
        <div
          className="grid grid-cols-2 h-fit mb-4 bg-[#F8991D1A]  rounded-[24px]"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div
            className={` w-full  flex justify-center items-left flex-col p-3 order-last rounded-r-[24px] order-last `}
          >
            <h1 className={`text-[#222057] font-semibold text-lg mb-3`}>Step Two</h1>
            <h2 className={`text-[#F8991D] font-semibold text-[14px]`}> Enrollment Guide</h2>
            <p className="text-sm text-left mt-1 font-gilroyregular">
              After your session, you will be walked through the process of enrollment, payment plans, self-paced study pack and calendar for instructor-led classes.            </p>
          </div>
          <div className="">
            <img src={"https://i.im.ge/2023/02/08/awDTpX.image-7-2.png"} alt="" className={`h-full  w-[80%]  rounded-l-[24px]`} />
          </div>
        </div>
        <div
          className="grid grid-cols-2 h-fit mb-4"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div
            className={`bg-[#F8991D1A]  flex justify-center items-left flex-col p-3   order-first rounded-l-[24px] `}
          >
            <h1 className={`text-[#222057] font-semibold text-lg mb-3`}>Step Three</h1>
            <h2 className={`text-[#F8991D] font-semibold text-[14px]`}> Pay Tuition</h2>
            <p className="text-sm text-left mt-1 font-gilroyregular">
              Once you pay tuition, you will be forwarded all necessary course materials, a welcome pack, and an invite into the course community on slack where you join other students.            </p>
          </div>
          <div className="">
            <img src={"https://i.im.ge/2023/02/08/awDd7q.image-7-3.png"} alt="" className={`h-full  w-[80%]   rounded-r-[24px] `} />
          </div>
        </div>
        <div
          className="grid grid-cols-2 h-fit mb-4  bg-[#EDEDF2]   rounded-[24px]"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div
            className={` flex justify-center items-left flex-col p-3  rounded-r-[24px]  order-last`}
          >
            <h1 className={`text-[#222057] font-semibold text-lg mb-3`}>Step Four</h1>
            <h2 className={`text-[#F8991D] font-semibold text-[14px]`}> You Are All Set! </h2>
            <p className="text-sm text-left mt-1 font-gilroyregular">
              Take full advantage a world class training program and a community of like minds.
            </p>
            <ScrollIntoView selector="#schools">
              <button className=" border border-amber-500 bg-amber-500 text-white px-2 md:px-6 lg:px-8 py-2 text-[12px] rounded mt-3  w-[80%] lg:w-fit flex justify-center items-center">
                Enroll Now
              </button>
            </ScrollIntoView>
          </div>
          <div className="">
            <img src={"https://i.im.ge/2023/02/08/awD62x.image-7-4.png"} alt="" className={`h-full  w-[80%]  rounded-l-[24px]`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
