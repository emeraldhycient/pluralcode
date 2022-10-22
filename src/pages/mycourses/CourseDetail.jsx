import React, { useEffect } from 'react'
import { Tabs } from 'flowbite-react'
import { BsWalletFill } from "react-icons/bs"
import { useParams } from 'react-router-dom'


import DashboardLayout from '../../components/layout/DashboardLayout'
import CourseCard from '../../components/common/CourseCard'
import schoolsdata from '../../data/schoolsdata'

import DashboardData from '../../store/DashboardData'
import axiosClient from '../../services/apiClient'
import MyCourseCard from '../../components/mycourses/MyCourseCard'
import CertificateCards from '../../components/mycourses/CertificateCards'
import BackBtn from '../../components/common/BackBtn'
import CustomButton from '../../components/CustomButton'
import slack from "../../assets/slack.svg"
import MentorCard from '../../components/mycourses/MentorCard'
import VideoCard from '../../components/mycourses/VideoCard'
import PaymentCard from '../../components/mycourses/PaymentCard'

function CourseDetail() {

    const { course } = useParams();

    const Data = DashboardData((state) => state.data);
    console.log(Data)
    const StoreData = DashboardData((state) => state.storeData)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosClient.get("/student/dashboard_api");
                StoreData(res.data)
                sessionStorage.setItem("dashboard", JSON.stringify(res.data))
                // console.log(res.data)
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
                    <CustomButton>
                        <img src={slack} />
                        Join Community
                    </CustomButton>
                </div>
            </div>
            <div className="mt-6 md:mt-6 bg-white rounded-[8px]  py-10 w-full">
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
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 bg-white h-fit   my-4 rounded-tl-3xl rounded-br-3xl py-6 w-full">
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                        </div>

                    </Tabs.Item>
                    <Tabs.Item
                        title="Resources"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 bg-white h-fit   my-4 rounded-tl-3xl rounded-br-3xl py-6 w-full">
                            <CertificateCards />
                            <CertificateCards />
                            <CertificateCards />
                        </div>
                    </Tabs.Item>

                    <Tabs.Item
                        title="Payment Status"
                    >
                        <div className="bg-[#F5F6FA] md:bg-white p-4 md:p-20">
                            <PaymentCard />
                        </div>
                    </Tabs.Item>

                    <Tabs.Item
                        title="Mentor"
                    >
                        <MentorCard />
                    </Tabs.Item>


                </Tabs.Group>
            </div>

        </DashboardLayout>
    )
}

export default CourseDetail
