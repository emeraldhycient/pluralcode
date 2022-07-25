import React from "react";

function Captures() {
  return (
    <div className="h-fit md:h-fit lg:h-fit w-full flex justify-center items-center flex-col">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full w-10/12 mx-auto">
        <div className="">
          <img src="https://picsum.photos/200" alt="" className="w-full h-56" />
        </div>
        <div className="">
          <img src="https://picsum.photos/200" alt="" className="w-full h-56" />
        </div>
        <div className="">
          <img src="https://picsum.photos/200" alt="" className="w-full h-56" />
        </div>
      </div>
    </div>
  );
}

export default Captures;
