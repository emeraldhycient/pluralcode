import React, { useState } from 'react'
import data_analytics from "../../assets/data_analytics.svg"
import VideoModal from "../common/VideoModal";


function VideoContainer({ video_url, poster }) {

    const [ismodalshowing, setismodalshowing] = useState(false)

    return (
        <div className='h-fit mb-10 bg-white p-2 rounded-md md:rounded-3xl md:shadow' onClick={() => setismodalshowing((prev) => !prev)}>
            {ismodalshowing ?
                <VideoModal setismodalshowing={setismodalshowing} video_url={video_url ? video_url : `https://res.cloudinary.com/gofitish/video/upload/v1659095398/videos/Plural_Code_-_Our_Instructor_t5qtrr.mp4`} /> : ""}
            <img
                src={poster ? poster : data_analytics}
                // src={"http://pluralcode.academy/assets/product_des.4ad681c3.jpg"}
                alt="product"
                className="w-[100%]  "
                data-aos="fade-right"
                data-aos-duration="2000"
            />
        </div>
    )
}

export default VideoContainer