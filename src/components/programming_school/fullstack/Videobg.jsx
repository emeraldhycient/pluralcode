import { useState } from "react";
import "./modal.css";
import school from "../../../assets/images/school1.png";
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
            video_url="https://res.cloudinary.com/gofitish/video/upload/v1659095398/videos/Plural_Code_-_Our_Instructor_t5qtrr.mp4"
          />
        </section>
      )}
    </>
  );
}

export default Videobg;
