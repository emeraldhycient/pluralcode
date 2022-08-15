import { Link } from "react-router-dom";
import cloud9 from "../../assets/images/cloud9.png";
import cloud2 from "../../assets/images/cloud2.png";
import GetStarted from "./GetStarted";
import peoples from "../../assets/images/peoples.png";

function HeroSection() {
  return (
    <section className="h-fit md:h-[50vh] lg:h-fit w-screen pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className=" h-full flex flex-col md:justify-center items-left text-left w-full align-left">
          <h6
            className="text-amber-500"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Welcome to PluralCode
          </h6>
          <h1
            className="text-4xl md:text-5xl font-bold  font-gilroy  lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug	"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Cloud School
          </h1>
          <p
            className="font-gilroyregular text-[16px]  lg:text-left  font-extralight text-[#232323] mb-8"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            The Cloud Computing program prepares students to design solutions
            for Infrastructure as a Service (IaaS) architectures by provisioning
            computing instances,managing databases, and storage within a secure
            online environment. Our cloud school prepares students for
            occupations in Cloud Architecture, Cloud Support Associate, Devops
            engineering, Cloud Engineering or become Cloud Technicians.
          </p>
        </div>
        <div
          className="col-span-"
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{ backgroundImage: `url(${cloud2})` }}
        >
          <img src={cloud9} alt="product" className="w-[90%] h-full" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
