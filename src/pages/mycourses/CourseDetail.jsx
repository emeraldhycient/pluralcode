import React, { useEffect, useState } from 'react'
import { Tabs } from 'flowbite-react'
import { BsWalletFill } from "react-icons/bs"
import { useParams } from 'react-router-dom'


import DashboardLayout from '../../components/layout/DashboardLayout'


import DashboardData from '../../store/DashboardData'
import axiosClient from '../../services/apiClient'
import BackBtn from '../../components/common/BackBtn'
import CustomButton from '../../components/CustomButton'
import slack from "../../assets/slack.svg"
import MentorCard from '../../components/mycourses/MentorCard'
import PaymentCard from '../../components/mycourses/PaymentCard'
import CourseDetailvideo from './CourseDetailvideo'
import CourseDetailDoc from './CourseDetailDoc'

function CourseDetail() {

    const { course, id } = useParams();
    const [communitylink, setcommunitylink] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosClient.get(`/student/get_community_link?course_id=${id}`);
                console.log(res.data)
                setcommunitylink(res.data.community_link)
            } catch (error) {
                console.log(error.response)
            }
        }

        fetchData()
    }, [])

    // console.log(Data)


    return (
        <DashboardLayout>
            <div className="flex justify-between items-center ">
                <BackBtn />
                <div className="w-fit md:w-[22%]">
                    <CustomButton link={communitylink}>
                        <img src={slack} />
                        Join Community
                    </CustomButton>
                </div>
            </div>
            <div className="mt-6 md:mt-6 bg-white rounded-[8px]  py-10  md:px-5 w-full">
                <div className="hidden  lg:flex flex-col md:flex-row justify-between px-3">
                    <h1
                        className="text-[30px] text-[#222057] font-medium mb-4"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        {course || "Product Design 2"}
                    </h1>
                    <div className="flex mb-3">
                        <div className="h-[2.8rem] bg-[#F5F6FA] w-72 rounded flex items-center rounded-[8px]">
                            <input type="text" placeholder='Seacrch by topic' className="border-0 border-transparent focus:border-transparent focus:ring-0 bg-transparent h-[2.8rem] w-full text-gray-500" />
                        </div>
                        <button className="h-[2.8rem] px-3 bg-[#222057] rounded-[8px] text-white ml-2">Search</button>
                    </div>
                </div>
                <Tabs.Group
                    aria-label="pluralcode schools"
                    style="underline"
                >
                    <Tabs.Item
                        title="Videos"
                    >

                        <CourseDetailvideo />
                    </Tabs.Item>
                    <Tabs.Item
                        title="Resources"
                    >
                        <CourseDetailDoc />
                    </Tabs.Item>

                    <Tabs.Item
                        title="Payment Status"
                    >
                        <div className="bg-[#F5F6FA] md:bg-white p-4 md:p-20">
                            <PaymentCard />
                        </div>
                    </Tabs.Item>

                </Tabs.Group>
            </div>

        </DashboardLayout>
    )
}

export default CourseDetail
