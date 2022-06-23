import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <button className="bg-amber-500 text-white px-2 py-2 rounded">
      <Link to="/create-account" className="flex items-center">
        Get Started
      </Link>
    </button>
  );
}

export default GetStarted;
