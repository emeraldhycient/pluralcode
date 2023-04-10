import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import techcabal from "../../assets/images/tech3.svg"
import techpoint from "../../assets/images/tech2.svg"
import businessday from "../../assets/images/businessday.svg"
function Press() {
    return (
        <section className="h-fit py-24 lg:py-32 w-screen bg-[#FFFDFA]" id="schools">
            <center data-aos="zoom-in-up" data-aos-duration="1200">
                <h1 className="text-3xl md:text-[44px] font-bold  text-[#222057] font-gilroy text-center w-full align-left mb-10 md:mb-20 leading-snug	">
                    Pluralcode In The Press
                </h1>
                <p className="font-gilroyregular text-[14px] font-extralight mb-7 w-[90%] md:w-[43%] mx-auto text-center">
                    Good things are hard to keep hidden and we are no exception. Find out what has been written in the news about Pluralcode, we will continue to work hard and build Africa’s largest school of technology.                </p>
            </center>
            <div className="md:flex justify-center items-center flex-wrap gap-10 w-11/12 md:w-11/12  mx-auto h-full w-full pt-8">
                <div
                    className="bg-white press_shadow rounded-tl-3xl rounded-br-3xl p-6 w-[340px] mb-10 mx-auto md:mx-0"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    <img
                        src={techcabal}
                        alt="course1"
                        className="w-full rounded-tl-3xl  rounded-br-3xl"
                    />
                    <h1 className="text-lg font-bold text-[#222057] font-gilroy text-left w-full align-left  mb-2 mt-3 leading-snug	">
                        Techpoint Africa
                    </h1>
                    <p className="font-gilroyregular text-[14px] font-extralight">
                        Pluralcode partners with Finquest Finance to launch ‘Learn Now, Pay Later’
                    </p>

                    <div className="mt-4">
                        <a href={"https://techpoint.africa/2023/01/27/pluralcode-partners-with-finquest-finance-to-launch-learn-now-pay-later-for-nigerian-tech-enthusiasts/"} target="_blank" className="text-amber-500 font-bold text-sm">
                            Read Article
                        </a>
                    </div>
                </div>
                <div
                    className="bg-white press_shadow rounded-tl-3xl rounded-br-3xl p-6 w-[340px] mb-10 mx-auto md:mx-0"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    <img
                        src={techpoint}
                        alt="course1"
                        className="w-full rounded-tl-3xl  rounded-br-3xl"
                    />
                    <h1 className="text-lg font-bold text-[#222057] font-gilroy text-left w-full align-left  mb-2 mt-3 leading-snug	">
                        TechNext NG
                    </h1>
                    <p className="font-gilroyregular text-[14px] font-extralight">
                        Pluralcode, is on a mission to build Africa’s largest tech school                    </p>

                    <div className="mt-4">
                        <a href={"https://technext.ng/2023/01/26/pluralcode-mission-africa-tech-school/"} target="_blank" className="text-amber-500 font-bold text-sm">
                            Read Article
                        </a>
                    </div>
                </div>
                <div
                    className="bg-white press_shadow rounded-tl-3xl rounded-br-3xl p-6 w-[340px] mb-10 mx-auto md:mx-0"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    <img
                        src={businessday}
                        alt="course1"
                        className="w-full rounded-tl-3xl  rounded-br-3xl"
                    />
                    <h1 className="text-lg font-bold text-[#222057] font-gilroy text-left w-full align-left  mb-2 mt-3 leading-snug	">
                        Business Day
                    </h1>
                    <p className="font-gilroyregular text-[14px] font-extralight">
                        Introducing Pluralcode, a fast-growing Ed-tech company.
                    </p>
                    <div className="mt-4">
                        <a href={"https://businessday.ng/sponsored/article/nigerian-ed-tech-company-pluralcode-is-on-a-mission-to-build-africas-largest-tech-school/"} target="_blank" className="text-amber-500 font-bold text-sm">
                            Read Article
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Press