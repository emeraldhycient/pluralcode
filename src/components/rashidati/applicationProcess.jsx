import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import bronchure from "../../assets/images/bronchure.png";

function ApplicationProcess() {
    return (
        <section className='py-24 md:py-36 bg-[#F5F6FA]'>
            <center data-aos="zoom-in-up pt-[30px]" data-aos-duration="1200">
                <h1 className="text-3xl md:text-[44px] font-bold  text-[#222057] font-gilroy text-center w-full align-left  mb-5 md:mb-7 leading-snug	">
                    Application Process
                </h1>
                <p className="font-gilroyregular text-[14px] font-extralight mb-16 w-[90%] md:w-[43%] mx-auto text-center">
                    Follows these simple steps to apply for the RASHxPluralcode scholarship
                </p>
            </center>
            <div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-11/12 md:w-10/12   mx-auto h-full w-full"
            >

                <img src="https://i.im.ge/2023/03/23/D4emqm.Group-20659.png" alt="" />
                <img src="https://i.im.ge/2023/03/23/D4ePF0.Group-20660.png" alt="" />
                <img src="https://i.im.ge/2023/03/23/D4ebqJ.Group-20661.png" alt="" />
                <img src="https://i.im.ge/2023/03/23/D4eJzY.Group-20662.png" alt="" />
                <img src="https://i.im.ge/2023/03/23/DBM0Z6.Group-20663.png" alt="" />
            </div>
        </section>
    )
}

export default ApplicationProcess