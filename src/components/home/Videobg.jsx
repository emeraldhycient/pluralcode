import { useState } from "react";
import "./modal.css";
import videobg from "../../assets/images/videobg.png";
import play from "../../assets/images/play.png";
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
        <button className="" onClick={(e) => setOpen(!isOpen)}>
          <img src={play} alt="play" />
        </button>
      )}
    </section>
  );
}

export default Videobg;
