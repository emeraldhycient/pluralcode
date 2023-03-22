import React from "react";
import GetStarted from "./GetStarted";

function Hire() {
  return (
    <div className="h-fit py-20 flex justify-center items-center flex-col">
      <h1 className="text-[22px] font-bold mb-4">
        Get a World Class Private Tutor
      </h1>
      <div className="w-60">
        <GetStarted />
      </div>
    </div>
  );
}

export default Hire;
