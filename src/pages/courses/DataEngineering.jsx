import React from 'react'
import CourseTitle from '../../components/courses/CourseTitle'
import ExclsuiveCard from '../../components/courses/ExclsuiveCard'
import VideoContainer from '../../components/courses/VideoContainer'
import DashboardLayout from '../../components/layout/DashboardLayout'


function DataEngineering() {
    return (
        <DashboardLayout>
            <CourseTitle link="/student/courses/enrollment/data/Data Engineering" title={"Data Engineering"}>
                <p className='text-[16px] mb-2 text-[#323232]'>Data engineering allows you to master the practice of designing and building systems for collecting , storing and analyzing data at scale.
                </p>
                <p className='text-[16px] mb-2 text-[#323232]'>
                    Learn how Data engineers work in a variety of settings to build systems that collect, manage, and convert raw data into usable information for data scientists and business analysts to interpret.

                </p>
            </CourseTitle>
            <VideoContainer video_url={"https://res.cloudinary.com/gofitish/video/upload/v1671103651/videos/data-engineering_2_xfpwkb.mp4"} />
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

export default DataEngineering