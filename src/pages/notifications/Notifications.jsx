import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

function Notifications() {
    return (
        <DashboardLayout> <div className="bg-white h-fit rounded-[8px] p-5 md:p-10">
            <h4 className='text-[28px] text-[#222057]'>Notifications</h4>
            <div className=" mt-8">
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
        </div>
        </DashboardLayout>
    )
}

const NotificationCard = () => (
    <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
            <div className="bg-gray-200 h-3 md:h-4 w-3 md:w-4 rounded-full mr-2"></div>
            <p className='text-sm text-[#232323]'>Your complete payment for product design course was successful</p>
        </div>
        <p className="text-xs">2:34pm</p>
    </div>
)

export default Notifications