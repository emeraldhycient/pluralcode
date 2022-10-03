import React from 'react'
import { Card, Tabs } from 'flowbite-react'
import { BsWalletFill } from "react-icons/bs"

import DashboardLayout from '../../components/layout/DashboardLayout'
import CourseCard from '../../components/common/CourseCard'

function Home() {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className='bg-white flex flex-col justify-center items-center w-full p-6 rounded'>
                    <div className='flex items-center w-full'>

                        <div className="h-[64px] w-[64px] bg-[#2220571A] rounded-full flex justify-center items-center">
                            <BsWalletFill size={30} color="#222057" />
                        </div>
                        <div className='ml-4'>
                            <h3 className='text-[24px] text-[#232323]'>My Wallet</h3>
                            <h5 className='text-[16px] text-[#323232]'>Outstanding Balance:<span className='text-amber-400'>N60,000</span> </h5>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex-col justify-center items-center w-full p-6 rounded hidden md:flex '>
                    <div className='flex items-center w-full'>

                        <div className="h-[64px] w-[64px] bg-[#F8991D1A] rounded-full flex justify-center items-center">
                            <BsWalletFill size={30} color="#F8991D" />
                        </div>
                        <div className='ml-4'>
                            <h3 className='text-[24px] text-[#232323]'>My Courses</h3>
                            <h5 className='text-[16px] text-[#323232]'>2 Registered Courses</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-10">
                <Tabs.Group
                    aria-label="pluralcode schools"
                    style="underline"
                >
                    <Tabs.Item
                        title="Data school"
                    >
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </Tabs.Item>
                    <Tabs.Item
                        active={true}
                        title="Product School"
                    >
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </Tabs.Item>
                    <Tabs.Item
                        title="Programming School"
                    >
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </Tabs.Item>
                    <Tabs.Item
                        title="Cloud school"
                    >
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </Tabs.Item>

                </Tabs.Group>
            </div>

        </DashboardLayout>
    )
}

export default Home
