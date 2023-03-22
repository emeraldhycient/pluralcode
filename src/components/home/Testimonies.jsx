import { useState } from "react";
import { Link } from "react-router-dom";
import group11 from "../../assets/images/Group11.png";
import temiloluwa from "../../assets/images/temiloluwa.png";
import Ojerinde from "../../assets/images/Ojerinde.png";
import Etim from "../../assets/images/Etim.png";
import coma from "../../assets/images/coma.png";
import Carousel from "react-material-ui-carousel";

function Testimonies() {
  const [testimony, settestimony] = useState([
    /*{
      name: "Temiloluwa Abimbola",
     // course: "Product Designer",
      content: ` I learned product design, which is everything a business owner does before any product is being launched and while the product is ongoing.
      The class was simplified to everyone’s level and was worked around everyone's schedule as well. That made it easy for a working-class person like me to attend. Also, the instructor and academy team were amazing.`,
      image: temiloluwa,
    },*/
    {
      name: "Ojerinde Adenike",
      //course: "Product Designer",
      content: `I learned a lot and networking was top-notch. We were able to meet with calm external professionals that enlightened us more about product design. `,
      image: Ojerinde,
    },
    {
      name: "Etim Samuel",
      //course: " Product Designer",
      content: `I had a nice time during the product design class, the mentor was on point and apt. I came in as a learner and finished a pro. The payment plan was good as well. It was an entire lovely experience.`,
      image: Etim,
    },
  ]);

  return (
    <section className="h-fit  py-16 w-screen bg-[#222057]">
      <Carousel next={(next, active) => {}} prev={(prev, active) => {}}>
        {testimony.map((testimony) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-9/12  mx-auto h-full w-full"
            key={testimony.name}
          >
            <div
              className="h-full w-full flex justify-center items-center"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src={testimony.image} alt="map" className="h-[80%] " />
            </div>

            <div className=" h-full flex flex-col justify-center  text-left w-full align-left">
              <h1
                className="text-3xl md:text-5xl font-thin  font-gilroy text-left w-full align-left text-white mb-4 leading-snug	"
                data-aos="zoom-in-up"
                data-aos-duration="1200"
              >
                What <span className="text-amber-500">Our Students</span> Are
                Saying
              </h1>
              <div className="" data-aos="fade-left" data-aos-duration="2000">
                <img src={coma} alt="" className="w-4" />
                <div className="font-gilroy text-white  ml-3 mb-2 flex">
                  <h1 className="font-extrabold text-lg">
                    {testimony.name} |{" "}
                  </h1>
                  <h4 className="font-gilroyregular text-[16px] font-extralight font-extralight ml-1">
                    {testimony.course}
                  </h4>
                </div>
                <p className="font-gilroyregular text-[16px] font-extralight font-extralight text-white  ml-3">
                  {testimony.content}
                  <img src={coma} alt="" className="w-4 float-right mt-4" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Testimonies;
