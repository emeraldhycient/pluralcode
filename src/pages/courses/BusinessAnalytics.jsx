import React from 'react'
import CourseTitle from '../../components/courses/CourseTitle'
import ExclsuiveCard from '../../components/courses/ExclsuiveCard'
import VideoContainer from '../../components/courses/VideoContainer'
import DashboardLayout from '../../components/layout/DashboardLayout'


function BusinessAnalytics() {
    return (
        <DashboardLayout>
            <CourseTitle link="/student/courses/enrollment/data/Business Analytics" title={"Business Analysis"}>
                <p className='text-[16px] mb-2 text-[#323232]'>This course is prepared to help you become a master in Business Analytics. As such, you develop a broad understanding of the potential impact that Big Data can have on a business organisation
                </p>
                <p className='text-[16px] mb-2 text-[#323232]'>
                    After you complete this degree, you will be ready for a career with a consultancy firm, in business consulting services, and in departments dedicated to business intelligence, business strategy, strategic analysis, digital marketing, operations, etc.   </p>
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

export default BusinessAnalytics