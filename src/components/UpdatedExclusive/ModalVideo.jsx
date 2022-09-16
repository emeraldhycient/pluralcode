import React from "react";

function ModalVideo({ setOpen, video_url }) {
  return (
    <div className="w-[80vw] mx-auto h-[80vh]  z-20 ">
      <div
        className="bg-white p-2 w-fit"
        onClick={(e) => setOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#222057]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <video
        src={video_url}
        className="w-full h-full"
        muted
        autoPlay
        controls
      ></video>
    </div>
  );
}

export default ModalVideo;
