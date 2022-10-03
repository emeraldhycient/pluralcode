import React from 'react'
import logo from "../../assets/logo.svg"
import sidebardata from '../../data/sidebardata';
import SidebarContent from './sidebarContent';

function Sidebar() {



    return (
        <div className='bg-white h-full overflow-y-auto border-r border-[#EAEAEA] '>
            <div className="h-[4.5rem] p-3 mb-8">
                <img src={logo} className="h-full w-full" alt="pluralcode logo" />
            </div>
            <ul className="">
                {
                    sidebardata.map((item) => (
                        <SidebarContent item={item} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar
