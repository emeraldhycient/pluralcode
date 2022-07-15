import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import icon from "../assets/images/icon.svg";
import cancel from "../assets/images/cancel.svg";
import GetStarted from "./home/GetStarted";
import SchoolDropDown from "./header/SchoolDropDown";
import PlatformDropDown from "./header/PlatformDropDown";
import EnterpriseDropDown from "./header/EnterpriseDropDown";
import MoreDropDown from "./header/MoreDropDown";
import Sidebar from "./header/mobile/Sidebar";

function Header() {
  const [isSchoolsShowing, setisSchoolsShowing] = useState(false);
  const [isPlatformShowing, setisPlatformShowing] = useState(false);
  const [isEnterpriseShowing, setisEnterpriseShowing] = useState(false);
  const [isMoreShowing, setisMoreShowing] = useState(false);

  const [isMobileSideBarShowing, setisMobileSideBarShowing] = useState(false);

  return (
    <section className="absolute w-full mb-6">
      <section className="bg-[#FFFDFA]  h-[4rem]  px-8 flex items-center justify-between">
        <div className="logo h-full flex items-center">
          <img src={logo} alt="Keep" />
        </div>
        <ul className="md:flex justify-around items-center hidden ">
          <li className="mx-2 text-[#232323] font-inter">
            <Link to="/">Home</Link>
          </li>
          <li
            className="mx-2 text-[#232323] font-inter"
            onMouseOver={() => {
              setisSchoolsShowing(!isSchoolsShowing);
              setisPlatformShowing(false);
              setisEnterpriseShowing(false);
              setisMoreShowing(false);
            }}
          >
            <Link to="#" className="flex items-center">
              Schools
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#232323]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </li>
          <li
            className="mx-2 text-[#232323] font-inter"
            onMouseOver={() => {
              setisPlatformShowing(!isPlatformShowing);
              setisSchoolsShowing(false);
              setisEnterpriseShowing(false);
              setisMoreShowing(false);
            }}
          >
            <Link to="#" className="flex items-center">
              Platform
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#232323]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </li>
          <li
            className="mx-2 text-[#232323] font-inter"
            onMouseOver={() => {
              setisPlatformShowing(false);
              setisSchoolsShowing(false);
              setisEnterpriseShowing(!isEnterpriseShowing);
              setisMoreShowing(false);
            }}
          >
            <Link to="#" className="flex items-center">
              Enterprise
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#232323]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </li>
          <li
            className="mx-2 text-[#232323] font-inter "
            onMouseOver={() => {
              setisMoreShowing(!isMoreShowing);
              setisPlatformShowing(false);
              setisSchoolsShowing(false);
              setisEnterpriseShowing(false);
            }}
          >
            <Link to="#" className="flex items-center">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#232323]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </li>
        </ul>
        <div className="hidden md:block">
          <GetStarted />
        </div>
        {isMobileSideBarShowing ? (
          <div
            className="block md:hidden"
            onClick={(e) => setisMobileSideBarShowing(!isMobileSideBarShowing)}
          >
            <img src={cancel} alt="" />
          </div>
        ) : (
          <div
            className="block md:hidden"
            onClick={(e) => setisMobileSideBarShowing(!isMobileSideBarShowing)}
          >
            <img src={icon} alt="" />
          </div>
        )}
      </section>
      {isSchoolsShowing && <SchoolDropDown />}
      {isPlatformShowing && <PlatformDropDown />}
      {isEnterpriseShowing && <EnterpriseDropDown />}
      {isMoreShowing && <MoreDropDown />}
      {isMobileSideBarShowing && <Sidebar />}
    </section>
  );
}

export default Header;
