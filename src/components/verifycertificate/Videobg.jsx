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
        <section className=" w-screen md:hidden block">
          <img
            src={"https://i.im.ge/2023/03/10/7JzyHT.Frame-8.png"}
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
            backgroundImage: `url(https://i.im.ge/2023/03/10/7JzyHT.Frame-8.png)`,
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
