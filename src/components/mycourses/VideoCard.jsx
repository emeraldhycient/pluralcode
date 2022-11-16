import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoPoster from "../../assets/videoPoster.png"
// import VideoModal from "./VideoModal";
import data_analytics from "../../assets/data_analytics.svg"

function VideoCard({ vid }) {

    const [ismodalshowing, setismodalshowing] = useState(false)

    console.log(vid.video_link)

    return (
        <div
            className="bg-[#F5F6FA] h-fit md:h-80 lg:h-fit my-4 rounded-tl-3xl rounded-br-3xl py-6 px-3 w-full"
            data-aos="fade-right"
            data-aos-duration="2000"
        >

            <div >
                {/* <iframe src={vid ? vid.video_link : data_analytics}
                    className="mx-auto w-[100%]  rounded-tl-3xl rounded-br-3xl"
                    allowFullScreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts"></iframe> */}

                <video
                    src={vid?.video_link ? vid.video_link : data_analytics}
                    // src={"http://pluralcode.academy/assets/product_des.4ad681c3.jpg"}
                    alt="product"
                    poster={vid?.video_thumbnail}
                    className="w-[90%]  rounded-tl-3xl rounded-br-3xl"
                    controls
                    data-aos="fade-right"
                    data-aos-duration="2000"
                />
            </div>
            <div className="pb-4 flex flex-col justify-center mt-4">
                <p
                    className="font-gilroyregular text-base  lg:text-left  font-light text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {vid?.video_title || "loading video title"}
                </p>
                {/* <p
                    className="font-gilroyregular text-base  lg:text-left  font-light text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    15mins
                </p> */}
            </div>
        </div>
    );
}

export default VideoCard;