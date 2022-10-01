import React from 'react'
import { Card } from 'flowbite-react'
import { BsWalletFill } from "react-icons/bs"

import DashboardLayout from '../../components/layout/DashboardLayout'

function Home() {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-4">
                <Card href="#">
                    <div className='flex items-center '>

                        <div className="h-[64px] w-[64px] bg-[#2220571A] rounded-full flex justify-center items-center">
                            <BsWalletFill size={30} color="#222057" />
                        </div>
                        <div className='ml-4'>
                            <h3 className='text-[24px] text-[#232323]'>My Wallet</h3>
                            <h5 className='text-[16px] text-[#323232]'>Outstanding Balance:<span className='text-amber-400'>N60,000</span> </h5>
                        </div>
                    </div>
                </Card>
                <Card href="#">
                    <div className='flex items-center '>

                        <div className="h-[64px] w-[64px] bg-[#F8991D1A] rounded-full flex justify-center items-center">
                            <BsWalletFill size={30} color="#F8991D" />
                        </div>
                        <div className='ml-4'>
                            <h3 className='text-[24px] text-[#232323]'>My Courses</h3>
                            <h5 className='text-[16px] text-[#323232]'>2 Registered Courses</h5>
                        </div>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    )
}

export default Home
