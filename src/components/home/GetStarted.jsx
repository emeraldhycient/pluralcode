import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded w-[80%] mx-auto lg:mx-0 lg:w-fit flex justify-center items-center">
      <a
        href="https://student.pluralcode.institute" className="flex items-center"
      >
        Get Started
      </a>
    </button>
  );
}

export default GetStarted;
