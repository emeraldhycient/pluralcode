import React from 'react'
import { useLocation } from 'react-router-dom'

function SidebarContent({ item }) {

    const location = useLocation();


    return (
        <li className={location.pathname === item.link ? "bg-[#F5F6FA] w-full py-3 flex justify-center items-center text-[#F8991D] my-6 border-l-[0.3rem] border-amber-500" : "py-3 flex justify-center items-center text-[#232323] my-6"} >
            <a href={item.link} className="flex items-center  w-[70%] text-left" >
                <span className='mr-2'>
                    <img src={item.icon} />
                </span>
                <h4>{item.title}</h4>
            </a>
        </li>
    )
}

export default SidebarContent
