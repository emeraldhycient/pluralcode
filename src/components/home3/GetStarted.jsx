import { Link } from "react-router-dom";

function GetStarted({ title, url }) {
  return (
    <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded w-[80%] mx-auto lg:mx-0 lg:w-fit flex justify-center items-center">
      <a
        href={url ? url : "https://student.pluralcode.institute"} className="flex items-center"
      >
        {title ? title : " Get Started"}
      </a>
    </button>
  );
}

export default GetStarted;
