import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isSchoolsShowing, setisSchoolsShowing] = useState(false);
  const [isPlatformShowing, setisPlatformShowing] = useState(false);
  const [isEnterpriseShowing, setisEnterpriseShowing] = useState(false);
  const [isMoreShowing, setisMoreShowing] = useState(false);

  const [isMobileSideBarShowing, setisMobileSideBarShowing] = useState(false);

  return (
    <section
      className="h-screen w-[80vw] -mt-16 pt-8 bg-white shadow shadow-lg relative rounded-tr-3xl rounded-br-3xl"
      style={{
        zIndex: 20,
      }}
    >
      <ul className=" flex flex-col justify-around items-center text-left ">
        <li className="my-3 text-[#232323] font-inter text-[20px]">
          <Link to="/">Home</Link>
        </li>
        <li
          className="my-3 text-[#232323] font-inter text-[20px]"
          onMouseOver={() => {
            setisSchoolsShowing(!isSchoolsShowing);
            setisPlatformShowing(false);
            setisEnterpriseShowing(false);
            setisMoreShowing(false);
          }}
        >
          <Link to="#" className="flex items-center ">
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
          className="my-3 text-[#232323] font-inter text-[20px]"
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
          className="my-3 text-[#232323] font-inter text-[20px]"
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
          className="my-3 text-[#232323] font-inter text-[20px]"
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
    </section>
  );
}

export default Sidebar;
