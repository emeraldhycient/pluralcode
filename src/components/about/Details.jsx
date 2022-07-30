import about3 from "../../assets/images/about3.png";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";
import { GoLocation } from "react-icons/go";

function Details() {
  return (
    <section className="h-fit py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-9/12 mx-auto h-full w-full">
        <div
          className="flex justify-center flex-col"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h1 className="text-2xl md:text-3xl font-bold  font-gilroy md:text-center lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-tight	">
            Reach Out to Us{" "}
          </h1>
          <p className="font-gilroyregular text-[16px] md:text-center lg:text-left  font-extralight text-[#232323] mb-3 flex flex-wrap items-center">
            <FiPhoneCall className="text-gray-400 mr-2" />
            <a href="tel:+2348037961731" className="text-gray-400 mr-2">
              +(234)803-796-1731
            </a>
            <a href="tel:+2348037961731" className="text-gray-400 mr-2">
              +(234)803-796-1731
            </a>
            <a href="tel:+2348037961731" className="text-gray-400 mr-2">
              +(234)803-796-1731
            </a>
          </p>
          <p className="font-gilroyregular text-[16px]    font-extralight text-[#232323] mb-3 flex items-center">
            <MdMarkEmailRead className="text-gray-400 mr-2" />
            <a
              href="mailto:support@pluralcode.academy"
              className="text-gray-400 mr-2"
            >
              support@pluralcode.academy
            </a>
          </p>
          <p className="font-gilroyregular text-[16px]    font-extralight text-[#232323] mb-3 flex items-center">
            <GoLocation className="text-gray-400 mr-2" />
            <a
              href="http://maps.google.com/maps?q=4b+Toyin+Street,+Ikeja,+Lagos+State              "
              className="text-gray-400 mr-2"
            >
              4b Toyin Street Ikeja, Lagos State
            </a>
          </p>
        </div>
        <div className="w-full">
          <img
            src={about3}
            alt=""
            srcset=""
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </section>
  );
}

export default Details;
