import React from 'react'
import Header from './Header'
import HeaderMobile from './HeaderMobile'
import Sidebar from './Sidebar'

function DashboardLayout({ children }) {
    return (
        <div className='h-screen w-full bg-[#F5F6FA] grid grid-cols-1 md:grid-cols-11'>
            <div className="col-span-2 z-[200] h-screen md:h-full fixed md:relative ">
                <Sidebar />
            </div>
            <div className="col-span-9 w-full h-screen  overflow-y-auto">
                <Header />
                <HeaderMobile />
                <div className="w-full p-2 md:p-10 h-screen overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
