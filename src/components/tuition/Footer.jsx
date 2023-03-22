import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";
import { GoLocation } from "react-icons/go";


function Footer() {
  return (
    <section
      className="bg-[#232057] h-fit w-full pt-16 px-3 md:p-16"
      id="footer"
      style={{
        backgroundImage: `url(https://i.im.ge/2023/03/23/D4aamK.Frame-22.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 w-full">
        <div className="w-full md:col-span-2">
          <img src={"https://i.im.ge/2023/03/21/DZdaix.PluralCode-4.png"} alt="" />
          <p className="font-gilroyregular text-[16px]  font-extralight text-white mt-3">
            Your global tech journey begins here. Master the skills you need to
            start a successful career.
          </p>
         
        </div>
        <div className="col-span-1 md:col-span-4  w-full flex flex-col md:flex-row justify-evenly">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="">
              <h1 className="text-lg text-white mb-4"> Policies </h1>
              <ul>
                <li className="text-base text-white mb-2">
                  <a href="/about">Terms and Condition</a>
                </li>
                <li className="text-base text-white mb-2">
                  <a href="/">Student Loan Policy </a>
                </li>
                <li className="text-base text-white mb-2">
                  <a href="/">Refunds Policy</a>
                </li>
                <li className="text-base text-white mb-2">
                  <a href="/">Privacy Policy</a>
                </li>

              </ul>
            </div>
            <div className="">
              <h1 className="text-lg text-white mb-4"> Contact </h1>
              <ul>
                <li className="text-base text-white mb-2">
                  <p className=" flex flex-wrap items-center">
                    <FiPhoneCall className="text-white mr-2" />
                    <a href="tel:+2347083153185" className="text-base text-white mr-2">
                      +(234) 708-315-3185.
                    </a>
                  </p>
                </li>
                <li className="text-base text-white mb-2">
                  <p className=" flex flex-wrap items-center">
                    <FiPhoneCall className="text-white mr-2" />
                    <a href="tel:+2348131529862" className=" text-base text-white mr-2">
                      +(234) 813-152-9862.
                    </a>
                  </p>
                </li>
                <li className="text-base text-white mb-2">
                  <p className=" flex flex-wrap items-center">
                    <TbBrandTwitter className="text-white mr-2" />
                    <a href="https://twitter.com/pluralcode/status/1548038713384452096?s=21&t=LSQTusS7JXkNc448HltKew"
                      target="_blank" className="text-white text-base mr-2">
                      pluralcode
                    </a>
                  </p>
                </li>
                <li className="text-base text-white mb-2">
                  <p className=" flex flex-wrap items-center">
                    <AiOutlineInstagram className="text-white mr-2" />
                    <a href="https://www.instagram.com/pluralcode_academy"
                      target="_blank"
                      className="text-base text-white mr-2">
                      pluralcode_academy
                    </a>
                  </p>
                </li>
                <li className="text-base text-white mb-2">
                  <p className=" flex flex-wrap items-center">
                    <AiOutlineFacebook target="_blank" className="text-white mr-2" />
                    <a href="https://www.facebook.com/103573938645826/posts/pfbid02RKRpzHEVeVEdAVfSiyBiXQDfMrfWzvpZKaPK9XeJAhdJFxsq3vKcSYzonmoppNecl/?d=n"
                      className="text-base text-white mr-2">
                      pluralcode_academy
                    </a>
                  </p>
                </li>
                <li className="text-base text-white mb-2">
                  <p className=" flex flex-wrap items-center">
                    <MdMarkEmailRead className="text-white mr-2" />
                    <a href="mailto:support@pluralcode.academy" target="_blank" className=" text-base text-white">
                      info@pluralcode.academy
                    </a>
                  </p>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
