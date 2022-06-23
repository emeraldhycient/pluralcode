import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import GetStarted from "./home/GetStarted";

function Header() {
  return (
    <section className="bg-[#FFFDFA] shadow h-[4rem]  px-8 flex items-center justify-between">
      <div className="logo h-full flex items-center">
        <img src={logo} alt="Keep" />
      </div>
      <ul className="flex justify-around items-center">
        <li className="mx-2 text-[#232323] font-inter">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-2 text-[#232323] font-inter">
          <Link to="/about" className="flex items-center">
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
        <li className="mx-2 text-[#232323] font-inter">
          <Link to="/about" className="flex items-center">
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
        <li className="mx-2 text-[#232323] font-inter">
          <Link to="/about" className="flex items-center">
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
        <li className="mx-2 text-[#232323] font-inter">
          <Link to="/about" className="flex items-center">
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
      <GetStarted />
    </section>
  );
}

export default Header;
