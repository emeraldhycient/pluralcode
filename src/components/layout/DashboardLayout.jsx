import React, { useState } from 'react'
import useNavToggle from '../../store/sidebartoggle'
import Header from './Header'
import HeaderMobile from './HeaderMobile'
import Sidebar from './Sidebar'

function DashboardLayout({ children }) {

    const isNavOpen = useNavToggle((state) => state.isOpen);


    return (
        <div className='h-screen w-full bg-[#F5F6FA] grid grid-cols-1 md:grid-cols-11'>
            <div className="col-span-1 md:col-span-2 z-[200] h-screen md:h-full hidden md:block w-screen md:w-full">
                <Sidebar />
            </div>
            {isNavOpen ? <div className="col-span-1 md:col-span-2 z-[200] h-screen md:h-full fixed md:hidden w-screen md:w-full">
                <Sidebar />
            </div> : ""}
            <div className="col-span-1 md:col-span-9 w-full h-screen  overflow-y-auto">
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
