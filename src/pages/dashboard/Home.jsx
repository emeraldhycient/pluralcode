import React, { useEffect } from 'react'
import { Tabs } from 'flowbite-react'
import { BsWalletFill } from "react-icons/bs"
import { useParams } from 'react-router-dom'


import DashboardLayout from '../../components/layout/DashboardLayout'
import CourseCard from '../../components/common/CourseCard'
import schoolsdata from '../../data/schoolsdata'

import DashboardData from '../../store/DashboardData'
import axiosClient from '../../services/apiClient'

function Home() {

    const { school } = useParams();

    const Data = DashboardData((state) => state.data);
    const StoreData = DashboardData((state) => state.storeData)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosClient.get("/student/dashboard_api");
                StoreData(res.data)
                sessionStorage.setItem("dashboard", JSON.stringify(res.data))
                console.log(res.data)
            } catch (error) {
                console.log(error.response)
            }
        }

        fetchData()
    }, [])

    // console.log(Data)


    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className='bg-white flex flex-col justify-center items-center w-full p-6 md:p-12 rounded-[8px]'>
                    <div className='flex items-center w-full'>

                        <div className="h-[64px] w-[64px] bg-[#2220571A] rounded-full flex justify-center items-center">
                            <BsWalletFill size={30} color="#222057" />
                        </div>
                        <div className='ml-4'>
                            <h3 className='text-[24px] text-[#232323]'>My Wallet</h3>
                            <h5 className='text-[16px] text-[#323232]'>Outstanding Balance:<span className='text-amber-400'>N{Data?.wallet}</span> </h5>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex-col justify-center items-center w-full p-6 md:p-12 rounded-[8px] hidden md:flex '>
                    <div className='flex items-center w-full'>

                        <div className="h-[64px] w-[64px] bg-[#F8991D1A] rounded-full flex justify-center items-center">
                            <BsWalletFill size={30} color="#F8991D" />
                        </div>
                        <div className='ml-4'>
                            <h3 className='text-[24px] text-[#232323]'>My Courses</h3>
                            <h5 className='text-[16px] text-[#323232]'>{Data?.total_enrolled_courses} Registered Courses</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-6 md:mt-10">
                <Tabs.Group
                    aria-label="pluralcode schools"
                    style="underline"
                >
                    <Tabs.Item
                        title="Data school"
                        active={school === "data" ? true : false}
                    >

                        {
                            schoolsdata.data.length > 0 ? schoolsdata.data.map((data) => (
                                <CourseCard course={data} />
                            )) : null
                        }

                    </Tabs.Item>
                    <Tabs.Item
                        title="Product School"
                        active={school === "product" ? true : false}
                    >
                        {
                            schoolsdata.product.length > 0 ? schoolsdata.product.map((data) => (
                                <CourseCard course={data} />
                            )) : null
                        }
                    </Tabs.Item>
                    <Tabs.Item
                        title="Programming School"
                        active={school === "programming" ? true : false}
                    >
                        {
                            schoolsdata.programming.length > 0 ? schoolsdata.programming.map((data) => (
                                <CourseCard course={data} />
                            )) : null
                        }
                    </Tabs.Item>
                    <Tabs.Item
                        title="Cloud school"
                        active={school === "cloud" ? true : false}
                    >
                        {
                            schoolsdata.cloud.length > 0 ? schoolsdata.cloud.map((data) => (
                                <CourseCard course={data} />
                            )) : null
                        }
                    </Tabs.Item>

                </Tabs.Group>
            </div>

        </DashboardLayout>
    )
}

export default Home
