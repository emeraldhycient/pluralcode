import logo from "../assets/images/logo.png";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";

function Footer() {
  return (
    <section className="bg-gray-100 h-fit md:h-[60vh] w-full pt-16 px-3 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 w-full">
        <div className="w-full md:col-span-2">
          <img src={logo} alt="" />
          <p className="text-sm text-gray-500 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim.
          </p>
          <div className="flex mt-3">
            <AiOutlineInstagram className="text-[#222057] mr-3" size={25} />
            <AiOutlineFacebook className="text-[#222057] mr-3" size={25} />
            <TbBrandTwitter className="text-[#222057] mr-3" size={25} />
            <TbBrandLinkedin className="text-[#222057] mr-3" size={25} />
          </div>
        </div>
        <div className="col-span-1 md:col-span-4  w-full flex flex-col md:flex-row justify-evenly">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="">
              <h1 className="text-base text-gray-700 mb-4"> Courses </h1>
              <ul>
                <li className="text-xs text-gray-600 mb-2">Product Design</li>
                <li className="text-xs text-gray-600 mb-2">
                  Product Management
                </li>
                <li className="text-xs text-gray-600 mb-2">Data Analysis</li>
                <li className="text-xs text-gray-600 mb-2">Machine Learning</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-sm text-gray-700 mb-4"> Platforms </h1>
              <ul>
                <li className="text-xs text-gray-600 mb-2">
                  Pluralcode SandBox
                </li>
                <li className="text-xs text-gray-600 mb-2">Web Series</li>
                <li className="text-xs text-gray-600 mb-2">Exclusive </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-sm text-gray-700 mb-4"> Enterprise </h1>
              <ul>
                <li className="text-xs text-gray-600 mb-2">
                  Corporate Trainings{" "}
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  Custom Software Development{" "}
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  Hire Our Talents{" "}
                </li>
              </ul>
            </div>{" "}
            <div className="">
              <h1 className="text-sm text-gray-700 mb-4"> More </h1>
              <ul>
                <li className="text-xs text-gray-600 mb-2">Why Pluralcode </li>
                <li className="text-xs text-gray-600 mb-2">
                  Talk to Student Advisor{" "}
                </li>
                <li className="text-xs text-gray-600 mb-2">Become a Mentor </li>
              </ul>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
