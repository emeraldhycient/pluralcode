import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function DashboardLayout({ children }) {
    return (
        <div className='h-screen w-full bg-[#F5F6FA] grid grid-cols-1 md:grid-cols-11'>
            <div className="col-span-2">
                <Sidebar />
            </div>
            <div className="col-span-9 w-full">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout
