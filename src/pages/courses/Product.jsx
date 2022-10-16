import React from 'react'
import CourseTitle from '../../components/courses/CourseTitle'
import ExclsuiveCard from '../../components/courses/ExclsuiveCard'
import VideoContainer from '../../components/courses/VideoContainer'
import DashboardLayout from '../../components/layout/DashboardLayout'


function Product() {
    return (
        <DashboardLayout>
            <CourseTitle link="/student/courses/enrollment/product/product design">
                <p className='text-[16px] mb-2 text-[#323232]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit in lacus, nam mauris lacus tristique morbi dis mauris. Sapien pellentesque phasellus malesuada et felis lacus. Molestie libero, mattis quam tellus eu, facilisis eu faucibus tortor.</p>
                <p className='text-[16px] mb-2 text-[#323232]'>
                    Nibh pellentesque tincidunt augue sit sit faucibus elementum dictumst pretium. Purus morbi lacinia ullamcorper nunc, est. At ultricies bibendum gravida faucibus id nullam amet. Quis porttitor venenatis in non sapien magna porttitor quis. Consectetur diam, ultricies odio ut duis senectus bibendum sollicitudin imperdiet.
                </p>
            </CourseTitle>
            <VideoContainer />
            <ExclsuiveCard >
                <p className='text-[16px] mb-2 text-[#323232]'>                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit in lacus, nam mauris lacus tristique morbi dis mauris. Sapien pellentesque phasellus malesuada et felis lacus. Molestie libero, mattis quam tellus eu, facilisis eu faucibus tortor.
                </p>
                <p className='text-[16px] mb-2 text-[#323232]'>
                    Nibh pellentesque tincidunt augue sit sit faucibus elementum dictumst pretium. Purus morbi lacinia ullamcorper nunc, est. At ultricies bibendum gravida faucibus id nullam amet. Quis porttitor venenatis in non sapien magna porttitor quis. Consectetur diam, ultricies odio ut duis senectus bibendum sollicitudin imperdiet.
                </p>
            </ExclsuiveCard>
        </DashboardLayout>
    )
}

export default Product