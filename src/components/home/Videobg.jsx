import { useState } from "react";
import "./modal.css";
import videobg from "../../assets/images/videobg.png";
import play from "../../assets/images/play.png";
import ModalVideo from "./ModalVideo";
import vdbg from "../../assets/images/bgimg.png";

function Videobg() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <section className="h-[30vh] md:h-[120vh] w-screen ">
          <img
            src={vdbg}
            alt=""
            onClick={(e) => setOpen(!isOpen)}
            className="h-[30vh] md:h-[120vh] w-screen "
          />
        </section>
      )}
      {isOpen && (
        <section className="">
          <ModalVideo
            setOpen={setOpen}
            video_url="https://www.w3schools.com/html/mov_bbb.mp4"
          />
        </section>
      )}
    </>
  );
}

export default Videobg;
