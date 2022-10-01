import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2  shadow shadow-[0px 4.43484px 6.65226px -1.33045px rgba(16, 24, 40, 0.1), 0px 1.77394px 2.6609px -1.77394px rgba(16, 24, 40, 0.1)]  bg-white h-fit md:h-80 lg:h-fit my-4 rounded-tl-3xl rounded-br-3xl py-6 px-3"
            data-aos="fade-right"
            data-aos-duration="2000"
        >
            <img
                src={"http://pluralcode.academy/assets/product_des.4ad681c3.jpg"}
                alt="product"
                className="w-[90%]  rounded-tl-3xl rounded-br-3xl"
                data-aos="fade-right"
                data-aos-duration="2000"
            />
            <div className="pb-4 flex flex-col justify-center ">
                <h6 data-aos="fade-right" data-aos-duration="2000">
                    {/* <span className="text-semibold"> {course.level}</span>{" "}
                    <span className="text-sm">{course.mode}</span> */}
                </h6>
                <h1
                    className="text-[30px] text-[#222057] font-medium"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {/* {course.title} */}
                    Data Analytics
                </h1>
                <p
                    className="font-gilroyregular text-sm  lg:text-left  font-extralight text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {/* {course.description} */}
                    Learn to build Financial models, forecast performances and perform Valuations for companies. Become industry ready in just 12 weeks.
                </p>
                <h5
                    className="text-sm mb-3"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {/* {course.duration} */}
                    Duration: 12 Weeks
                </h5>
                <h5
                    className="text-xs mb-3"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {/* {course.duration} */}
                    Next Class Starts: July 2, 2022                </h5>

                <button
                    className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded w-fit  lg:mx-0 lg:w-fit flex justify-center items-center"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {/* <Link to={course.link} className="flex items-center"> */}
                    <Link to="/" className="flex items-center">
                        Learn More
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default CourseCard;