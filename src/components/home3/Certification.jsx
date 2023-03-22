import React from 'react'
import cert from "../../assets/images/cert-b.svg"
function Certification() {
    return (
        <div id='accredition' className='h-fit mb-20 mt-6 md:-mb-12 md:h-[250px] bg-[#222057] w-full rounded-[24px] w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 md:py-3 relative'>
            <div className="w-full md:w-[50%]">
                <h1 className="text-2xl font-medium text-white font-gilroy   mb-6 md:mb-10 leading-snug	w-full">
                    Internationally Accredited
                </h1>
                <h4
                    className="my-1 font-gilroyregular text-[12px] text-left text-white"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    Pluralcode Institute is formally accredited by the American Council of Training and Development (ACTD) after meeting its global standards for accreditation. We are immensely proud of this and will continue to build the largest school of tech in Africa.
                </h4>
            </div>
            <div className="w-full md:w-[20%] order-first md:order-last mb-7 md:mb-1 flex justify-center items-center">
                <img src={cert} alt="" />
            </div>
        </div>
    )
}

export default Certification