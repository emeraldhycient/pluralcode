import React from 'react'
import CourseTitle from '../../components/courses/CourseTitle'
import ExclsuiveCard from '../../components/courses/ExclsuiveCard'
import VideoContainer from '../../components/courses/VideoContainer'
import DashboardLayout from '../../components/layout/DashboardLayout'


function ProductManagement() {
    return (
        <DashboardLayout>
            <CourseTitle link="/student/courses/enrollment/product/product management" title={"Product Management"}>
                <p className='text-[16px] mb-2 text-[#323232]'>Understand the keys to successfully navigating the roles and responsibilities of being a product manager to champion change with internal and external collaborators and influencers see to the process of bringing a new product to market or developing an existing one.
                </p>
                <p className='text-[16px] mb-2 text-[#323232]'>
                    It starts with an idea of a product that a customer will interact with and ends with the evaluation of the product’s success. Product management unites business, product development, marketing, and sales.                </p>
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

export default ProductManagement