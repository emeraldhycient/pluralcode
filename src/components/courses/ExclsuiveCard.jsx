import React from 'react'
import CustomButton from '../CustomButton'
import exclusive from "../../assets/exclusive.svg"

function ExclsuiveCard({ children, link }) {
    return (
        <div className='h-fit w-full  rounded-[8px] bg-white p-10 grid grid-cols-1 md:grid-cols-5 mt-20'>
            <div className="col-span-2">
                <img src={exclusive} className="w-[80%] rounded-full" alt="" />
            </div>
            <div className="col-span-3">
                <h3 className='text-[32px] text-[#222057] mb-5'>PluralCode Exclusive Program</h3>
                {children}
                <div className="w-fit mt-5">
                    <CustomButton link={link}>Learn More</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default ExclsuiveCard