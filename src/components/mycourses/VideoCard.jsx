import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoPoster from "../../assets/videoPoster.png"
// import VideoModal from "./VideoModal";
import data_analytics from "../../assets/data_analytics.svg"

function VideoCard({ course }) {

    const [ismodalshowing, setismodalshowing] = useState(false)

    return (
        <div
            className="bg-[#F5F6FA] h-fit md:h-80 lg:h-fit my-4 rounded-tl-3xl rounded-br-3xl py-6 px-3 w-full"
            data-aos="fade-right"
            data-aos-duration="2000"
        >

            <div >
                <img
                    src={course?.image ? course.image : data_analytics}
                    // src={"http://pluralcode.academy/assets/product_des.4ad681c3.jpg"}
                    alt="product"
                    className="w-[90%]  rounded-tl-3xl rounded-br-3xl"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                /></div>
            <div className="pb-4 flex flex-col justify-center mt-4">
                <p
                    className="font-gilroyregular text-base  lg:text-left  font-light text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {course?.description || "Introduction to User Experience Design"}
                </p>
                <p
                    className="font-gilroyregular text-base  lg:text-left  font-light text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    15mins
                </p>
            </div>
        </div>
    );
}

export default VideoCard;