import React from 'react'
import CourseTitle from '../../components/courses/CourseTitle'
import ExclsuiveCard from '../../components/courses/ExclsuiveCard'
import VideoContainer from '../../components/courses/VideoContainer'
import DashboardLayout from '../../components/layout/DashboardLayout'


function ProductMarketing() {
    return (
        <DashboardLayout>
            <CourseTitle link="/student/courses/enrollment/product/Product Marketing" title={"Product Marketing"}>
                <p className='text-[16px] mb-2 text-[#323232]'>Become a Product marketing expert in this 8 weeks course. Learn and understand the principles of marketing as a tool in product management.
                </p>
                <p className='text-[16px] mb-2 text-[#323232]'>
                    Product marketing is the process of bringing a product to market, promoting it, and selling it to a customer. Learn how to understand a product’s target audience using strategic positioning and messaging to boost revenue and demand for the product.
                </p>
            </CourseTitle>
            <VideoContainer />
            <ExclsuiveCard link={"/student/exclusive"}>
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

export default ProductMarketing