import React from 'react'
import CustomButton from '../CustomButton'

function CourseTitle({ title, children, link }) {
    return (
        <div className='h-fit w-full  rounded-[8px] bg-white p-5'>
            <h3 className='text-[32px] text-[#222057] mb-5'>{title ? title : "Product Design"}</h3>
            {children}
            <div className="w-fit mt-5">
                <CustomButton link={link}>Apply Now</CustomButton>
            </div>
        </div>
    )
}

export default CourseTitle
