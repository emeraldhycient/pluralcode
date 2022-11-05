import React from 'react'
import CustomButton from '../../components/CustomButton'
import DashboardLayout from '../../components/layout/DashboardLayout'
import VideoContainer from '../../components/exclusive/VideoContainer'
import data_analytics from "../../assets/data_analytics.svg"
import Faq from '../../components/exclusive/Faq'

import ExclusiveCourses from "./data"


function Exclusive() {
    return (
        <DashboardLayout>
            <div className='h-fit w-full  rounded-[8px] bg-transparent md:bg-white p-5 mb-4'>
                <VideoContainer video_url={"https://res.cloudinary.com/gofitish/video/upload/v1663331212/videos/WhatsApp_Video_2022-09-16_at_1.17.41_PM_knyugc.mp4"} />
                <h3 className='text-[26px] md:text-[32px] text-[#222057] mb-5'>PluralCode Exclusive</h3>
                <p className='text-[16px] mb-2 text-[#323232]'>Data Analytics program provides a range of ​data and analytics​ training designed to help ​individuals as well as ​organisations​, ​enable new and existing internal resources through the use of key data science tools and platforms.
                </p>
                <p className='text-[16px] mb-2 text-[#323232]'>
                    The curriculum is robust and carefully​ designed to address the needs​ and deliver the basic requirements for ​any ​data scientists and big data analysts​ to make business impact
                </p>
            </div>
            <div className='h-fit w-full  rounded-[8px] bg-white p-5 mt-8 md:mt-20'>
                <h3 className='text-[26px] md:text-[32px] text-[#222057] mb-5'>Our Exclusive Program Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        ExclusiveCourses.map((item) => (
                            <ExclusiveCourseCard item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
            <div className='h-fit w-full  rounded-[8px] bg-white p-5 mt-16 md:mt-20'>
                <h3 className='text-[26px] md:text-[32px] text-[#222057] mb-5'>Frequently Asked Questions</h3>
                <Faq />
            </div>
        </DashboardLayout>
    )
}

const ExclusiveCourseCard = (item) => {
    console.log(item)
    return (
        <div
            className="bg-[#F5F6FA] h-fit  my-4 rounded-tl-3xl rounded-br-3xl py-6 px-3 mb-4"
            data-aos="fade-right"
            data-aos-duration="2000"
        >  <div >
                <img
                    src={item.item.image}
                    alt="product"
                    className="w-[90%]  rounded-tl-3xl rounded-br-3xl"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                />
            </div>
            <div className="pb-4 flex flex-col justify-center mt-4">
                <h1
                    className="text-[25px] text-[#222057] font-medium mb-4"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {item.item.title}
                </h1>
                <p
                    className="font-gilroyregular text-sm  lg:text-left  font-extralight text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {item.item.description}
                </p>
                <div className="w-fit mt-3">
                    <CustomButton>Apply Now</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Exclusive