import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import bronchure from "../../assets/images/bronchure.png";

function Brochure() {
    return (
        <section className='py-24 md:py-36'>
            <center data-aos="zoom-in-up pt-[30px]" data-aos-duration="1200">
                <h1 className="text-3xl md:text-4xl font-medium text-[#222057] font-gilroy text-center w-full align-left  mb-12 lg:mb-20 leading-snug	">
                    Download Our Brochure
                </h1>
            </center>
            <div
                className="grid grid-cols-1 md:grid-cols-3 w-11/12 md:w-10/12   mx-auto h-full w-full"
            >
                <div
                    className=" h-full flex flex-col justify-center  text-left w-full align-left"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    <h1 className="text-[18px] font-semibold text-[#222057] font-gilroymedium text-center md:text-left w-full align-left  mb-4 leading-snug	">
                        Discover <span className='text-amber-500'>even more</span>
                    </h1>
                    <p className="font-gilroyregular text-[16px] font-extralight text-[#232323] mb-8 text-center md:text-left">
                        Get more information about our institution, program, partners and accreditation in your pocket.
                    </p>
                    <div className="text-center md:text-left hidden md:block">
                        <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded  lg:w-fit flex justify-center items-center">
                            <a
                                href="https://drive.google.com/file/d/1k1MDoS-VqL6ETrNx19rllM86CIzXcFgL/view?usp=sharing" target={"_blank"} className="flex items-center"
                            >
                                Download Brochure
                            </a>
                        </button>
                    </div>
                </div>

                <div
                    className="md:col-span-2 mb-4 md:mb-0 mt-8 md:mt-12"
                    data-aos="zoom-in-up"
                    data-aos-duration="1800"
                >
                    <img src={bronchure} alt="map" className="w-full md:w-[80%] mx-auto" />
                    <div className="text-center md:text-left md:hidden mt-3">
                        <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded mx-auto lg:mx-0 lg:w-fit flex justify-center items-center">
                            <a
                                href="https://student.pluralcode.institute" className="flex items-center"
                            >
                                Download Bronchure
                            </a>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Brochure