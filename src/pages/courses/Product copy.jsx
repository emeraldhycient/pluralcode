import React from 'react'
import CourseTitle from '../../components/courses/CourseTitle'
import ExclsuiveCard from '../../components/courses/ExclsuiveCard'
import VideoContainer from '../../components/courses/VideoContainer'
import DashboardLayout from '../../components/layout/DashboardLayout'


function Product() {
    return (
        <DashboardLayout>
            <CourseTitle link="/student/courses/enrollment/product/product design">
                <p className='text-[16px] mb-2 text-[#323232]'>Product design program sees to teach students how to design attractive mobile and web app interfaces for yourself, companies and startup businesses. You will be guided on how to design high fidelity digital products using Figma (most in-demand skill) and
                    journey mapping. This course will provide you with a more appropriate view of Design as a process and not just the output.</p>
                {/* <p className='text-[16px] mb-2 text-[#323232]'>
                    Nibh pellentesque tincidunt augue sit sit faucibus elementum dictumst pretium. Purus morbi lacinia ullamcorper nunc, est. At ultricies bibendum gravida faucibus id nullam amet. Quis porttitor venenatis in non sapien magna porttitor quis. Consectetur diam, ultricies odio ut duis senectus bibendum sollicitudin imperdiet.
                </p> */}
            </CourseTitle>
            <VideoContainer />
            <ExclsuiveCard >


                <p className='text-[16px] mb-2 text-[#323232]'>
                    PluralCode exclusive program gives you access to a private tutor with quality one on one mentorship, fewer distractions, greater learning and focus.
                </p>
                <h4 className='text-[19px] font-medium mb-2 text-[#323232]'>                    Get one on one mentorship. </h4>
                <p className='text-[16px] mb-2 text-[#323232]'>
                    This program gives you exclusive access to a mentor to learn virtually at your own pace. It’s a Flexible class model with hands on intensive learning, quality approach at your own pace. Perks of our exclusive program is more learning hours, question and answers sessions with few or no distractions. Seamless virtual learning with hands on project based learning.
                </p>
            </ExclsuiveCard>
        </DashboardLayout>
    )
}

export default Product