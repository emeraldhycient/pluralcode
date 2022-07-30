import { useState } from "react";
import "./modal.css";
import school from "../../../assets/images/school2.png";
import ModalVideo from "./ModalVideo";

function Videobg() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <section className="h-[50vh] md:h-[100vh] w-screen ">
          <img
            src={school}
            alt=""
            onClick={(e) => setOpen(!isOpen)}
            className="h-[50vh] md:h-[100vh] w-screen "
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
