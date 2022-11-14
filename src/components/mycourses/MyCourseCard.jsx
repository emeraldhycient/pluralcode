import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoPoster from "../../assets/videoPoster.png"
// import VideoModal from "./VideoModal";
import data_analytics from "../../assets/data_analytics.svg"

function MyCourseCard({ course }) {
    const [showMore, setShowMore] = useState(false);


    return (
        <div
            className="bg-[#F5F6FA]  my-4 rounded-tl-3xl rounded-br-3xl py-6 px-3 mb-4"
            data-aos="fade-right"
            data-aos-duration="2000"
        >

            <div >

                <img
                    src={course?.image ? course.image : data_analytics}
                    alt="product"
                    className="w-[100%]  rounded-tl-3xl rounded-br-3xl"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                />

            </div>
            <div className="pb-4 flex flex-col justify-center mt-4">

                <h1
                    className="text-[25px] text-[#222057] font-medium mb-4"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {course?.course_name || "loading course name"}
                </h1>
                <p
                    className="font-gilroyregular text-sm  lg:text-left  font-extralight text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {showMore ? course?.course_description : `${course?.course_description.substring(0, 150)}`}

                    {course?.course_description.length > 150 ? <button className="text-amber-500 ml-2" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button> : ""}
                </p>

                <button
                    className="text-amber-500 text-[18px] text-white px-2 py-2 rounded w-fit  lg:mx-0 lg:w-fit flex justify-center items-center"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    <Link to={`/student/mycourses/${course?.course_name}/${course?.id}`} className="flex items-center">
                        Course details
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default MyCourseCard;