import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoPoster from "../../assets/videoPoster.png"
// import VideoModal from "./VideoModal";
import data_analytics from "../../assets/data_analytics.svg"

function MyCourseCard({ course }) {

    const [ismodalshowing, setismodalshowing] = useState(false)

    return (
        <div
            className="bg-[#F5F6FA] h-fit md:h-80 lg:h-fit my-4 rounded-tl-3xl rounded-br-3xl py-6 px-3 mb-4"
            data-aos="fade-right"
            data-aos-duration="2000"
        >
            {/* <div className="w-[90%] h-full" style={{ backgroundImage: `url(${videoPoster})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>            </div> */}
            {/* onClick={() => setismodalshowing((prev) => !prev)} */}
            <div >
                {/* {ismodalshowing ?
                    <VideoModal setismodalshowing={setismodalshowing} video_url={course.video_url} /> : ""} */}
                <img
                    src={course?.image ? course.image : data_analytics}
                    // src={"http://pluralcode.academy/assets/product_des.4ad681c3.jpg"}
                    alt="product"
                    className="w-[90%]  rounded-tl-3xl rounded-br-3xl"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                /></div>
            <div className="pb-4 flex flex-col justify-center mt-4">
                <h6 data-aos="fade-right mb-4" data-aos-duration="2000">
                    {/* <span className="text-semibold"> {course.level}</span>{" "}
                    <span className="text-sm">{course.mode}</span> */}
                </h6>
                <h1
                    className="text-[30px] text-[#222057] font-medium mb-4"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {course?.title || "Product Design "}
                </h1>
                <p
                    className="font-gilroyregular text-sm  lg:text-left  font-extralight text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {course?.description || "Learn Ui/Ux from scratch without writing a single code. Master how to design high fidelity interface with FIGMA, design journey mapping and empathize with users."}
                </p>

                <button
                    className="text-amber-500 text-[18px] text-white px-2 py-2 rounded w-fit  lg:mx-0 lg:w-fit flex justify-center items-center"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {/* <Link to={course.link} className="flex items-center"> */}
                    <Link to={course?.link || "/student/mycourses/product design/"} className="flex items-center">
                        Learn More
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default MyCourseCard;