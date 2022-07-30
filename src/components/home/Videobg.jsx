import { useState } from "react";
import "./modal.css";
import videobg from "../../assets/images/videobg.png";
import ModalVideo from "./ModalVideo";

function Videobg() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      className="h-screen w-screen flex justify-center items-center"
      style={{
        background: `url(https://res.cloudinary.com/gofitish/image/upload/v1659209995/images/videobg_q9z3lx.png)`,
        backgroundSize: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {isOpen && (
        <ModalVideo
          setOpen={setOpen}
          video_url="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      )}
      {!isOpen && (
        <button className="" id="container15" onClick={(e) => setOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-[#222057]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </section>
  );
}

export default Videobg;
