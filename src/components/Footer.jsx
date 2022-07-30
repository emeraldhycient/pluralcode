import logo from "../assets/images/logo.png";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";

function Footer() {
  return (
    <section
      className="bg-gray-100 h-fit  lg:h-[60vh] w-full pt-16 px-3 md:p-16"
      id="footer"
      data-aos="fade-down-right"
      data-aos-duration="2000"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 w-full">
        <div className="w-full md:col-span-2">
          <img src={logo} alt="" />
          <p className="font-gilroyregular text-[16px]  font-extralight text-[#232323] mt-3">
            Your global tech journey begins here. Master the skills you need to
            start a successful career.
          </p>
          <div className="flex mt-3">
            <a
              href="https://www.instagram.com/pluralcode_academy"
              target="_blank"
            >
              <AiOutlineInstagram className="text-[#222057] mr-3" size={25} />
            </a>
            <a
              href="https://www.facebook.com/103573938645826/posts/pfbid02RKRpzHEVeVEdAVfSiyBiXQDfMrfWzvpZKaPK9XeJAhdJFxsq3vKcSYzonmoppNecl/?d=n"
              target="_blank"
            >
              <AiOutlineFacebook className="text-[#222057] mr-3" size={25} />
            </a>
            <a
              href="https://twitter.com/pluralcode/status/1548038713384452096?s=21&t=LSQTusS7JXkNc448HltKew"
              target="_blank"
            >
              <TbBrandTwitter className="text-[#222057] mr-3" size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/pluralcode-technologies/"
              target="_blank"
            >
              <TbBrandLinkedin className="text-[#222057] mr-3" size={25} />
            </a>
          </div>
        </div>
        <div className="col-span-1 md:col-span-4  w-full flex flex-col md:flex-row justify-evenly">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="">
              <h1 className="text-base text-gray-700 mb-4"> Courses </h1>
              <ul>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/schools/product/product-design">Product Design</a>
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/schools/product/product-management">
                    Product Management
                  </a>
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/schools/data/data-analytics">Data Analysis</a>
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/schools/data/machine-learning">Machine Learning</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-sm text-gray-700 mb-4"> Platforms </h1>
              <ul>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/sandbox">Pluralcode SandBox</a>
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/webseries">Web Series</a>
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/exclusive">Exclusive</a>{" "}
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-sm text-gray-700 mb-4"> Enterprise </h1>
              <ul>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/corporate-training">Corporate Trainings </a>
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/services">Custom Software Development </a>
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/hire-talent">Hire Our Talents</a>
                </li>
              </ul>
            </div>{" "}
            <div className="">
              <h1 className="text-sm text-gray-700 mb-4"> More </h1>
              <ul>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/about">Why Pluralcode</a>
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/advisor">Talk to Student Advisor </a>
                </li>
                <li className="text-xs text-gray-600 mb-2">
                  <a href="/mentor">Become a Mentor</a>
                </li>
              </ul>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
