import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <button className="bg-amber-500 text-white px-2 py-2 rounded w-full ">
      <Link
        to="/create-account"
        className="flex justify-center items-center text-center w-full"
      >
        Get Started
      </Link>
    </button>
  );
}

export default GetStarted;
