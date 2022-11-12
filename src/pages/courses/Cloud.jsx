import React from 'react'
import CourseTitle from '../../components/courses/CourseTitle'
import ExclsuiveCard from '../../components/courses/ExclsuiveCard'
import VideoContainer from '../../components/courses/VideoContainer'
import DashboardLayout from '../../components/layout/DashboardLayout'


function Cloud() {
    return (
        <DashboardLayout>
            <CourseTitle link="/student/courses/enrollment/cloud/Azure Cloud Computing" title={"Azure Cloud Computing"}>
                <p className='text-[16px] mb-2 text-[#323232]'>The Cloud Computing program prepares students to design solutions for Infrastructure as a Service (IaaS) architectures by provisioning computing instances,managing databases, and storage within a secure online environment. The program prepares students for occupations in Cloud Architecture, Cloud Support Associate, Devops engineering, Cloud Engineering or become Cloud Technicians.
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

export default Cloud