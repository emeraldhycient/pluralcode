import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import bronchure from "../../assets/images/bronchure.png";

function About() {
    return (
        <section className='py-24 md:py-36'>
            <center data-aos="zoom-in-up pt-[30px]" data-aos-duration="1200">
                <h1 className="text-3xl md:text-[44px] font-bold  text-[#222057] font-gilroy text-center w-full align-left mb-10 md:mb-20 leading-snug	">
                    About Rasheedat
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
                    <h1 className="text-[28px] font-semibold text-[#222057] font-gilroymedium text-center md:text-left w-full align-left  mb-4 leading-snug	">
                        About Rasheedat
                    </h1>
                    <p className="font-gilroyregular text-[16px] font-extralight text-[#232323] mb-2 text-center md:text-left">
                        Rasheedat Ajibade is a 23-year-old  professional female footballer  from Nigeria, currently signed with Atletico De Madrid Femenino (Spain) and the Nigerian National Team(Super Falcons).
                    </p>
                    <p className="font-gilroyregular text-[16px] font-extralight text-[#232323] mb-8 text-center md:text-left">
                        Nicknamed "RASH", a shortened form of her first name, and fondly called "The Girl With The Blue Hair", an ode to her bright-blue hairstyle which she dons whenever she takes onto the field.                   </p>

                </div>

                <div
                    className="md:col-span-2 mb-4 md:mb-0 mt-8 md:mt-12 order-first"
                    data-aos="zoom-in-up"
                    data-aos-duration="1800"
                >
                    <img src={"https://i.im.ge/2023/03/23/D4GCJM.Group-20638.png"} alt="map" className="w-full md:w-[60%] mx-auto" />
                    {/* <div className="text-center md:text-left md:hidden mt-3">
                        <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded mx-auto lg:mx-0 lg:w-fit flex justify-center items-center">
                            <a
                                href="https://student.pluralcode.institute" className="flex items-center"
                            >
                                Download Bronchure
                            </a>
                        </button>
                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default About