import { useState } from "react";
import "./modal.css";
import school from "../../../assets/images/school2.png";
import ModalVideo from "./ModalVideo";

function Videobg() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <section className=" w-screen md:hidden block">
          <img
            src={vdbg}
            alt=""
            onClick={(e) => setOpen(!isOpen)}
            className=" w-screen "
          />
        </section>
      )}
      {!isOpen && (
        <section
          className="md:h-[70vh] lg:h-[100vh] w-screen hidden md:block"
          onClick={(e) => setOpen(!isOpen)}
          style={{
            backgroundImage: `url(${school})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></section>
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
