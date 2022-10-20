import React from 'react'
import { BsLinkedin } from "react-icons/bs"

function MentorCard() {
    return (
        <div className='border-2 border-[#F5F6FA] h-[300px] rounded-[8px] md:w-[80%] grid grid-cols-1 md:grid-cols-5 gap-3'>
            <div className="col-span-2 h-full w-full">
                <img src="https://i.im.ge/2022/10/20/26co3c.Image.png" className='h-[250px] w-72' alt="" />
            </div>
            <div className="col-span-3 h-full flex flex-col justify-center">
                <h4 className='text-[#F8991D] text-lg'>Mabel Okeke</h4>
                <h4 className='text-[#222057] text-lg mb-3'>Product Designer</h4>
                <p
                    className="font-gilroyregular text-[16px]  lg:text-left  font-extralight text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    A skilled UI/UX and Product designer focused on creating easy to use, aesthetically pleasing, and great designs that offer great and exciting digital experiences to humans and brands.
                </p>
                <button className="h-[2.6rem]  bg-[#222057] w-fit rounded-[8px] text-white  px-7 mt-5 ">
                    <a href="https://linkedin.com/igweze.hycient" className="flex items-center" target="_blank">
                        <BsLinkedin size={18} color="white" className='mr-3' /> 
                        <span>LinkedIn Profile</span>
                        </a>
                </button>
            </div>
        </div>
    )
}

export default MentorCard