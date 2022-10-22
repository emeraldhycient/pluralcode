import React from 'react'
import CourseTitle from '../../components/courses/CourseTitle'
import ExclsuiveCard from '../../components/courses/ExclsuiveCard'
import VideoContainer from '../../components/courses/VideoContainer'
import DashboardLayout from '../../components/layout/DashboardLayout'


function DataAnalytics() {
    return (
        <DashboardLayout>
            <CourseTitle link="/student/courses/enrollment/data/Data Analytics" title={"Data Analytics"}>
                <p className='text-[16px] mb-2 text-[#323232]'>Data Analytics program provides a range of ​data and analytics​ training designed to help ​individuals as well as ​organisations​, ​enable new and existing internal resources through the use of key data science tools and platforms.
                </p>
                <p className='text-[16px] mb-2 text-[#323232]'>
                    The curriculum is robust and carefully​ designed to address the needs​ and deliver the basic requirements for ​any ​data scientists and big data analysts​ to make business impact                </p>
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

export default DataAnalytics