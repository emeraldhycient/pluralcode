import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"

function SidebarContent({ item }) {

    const location = useLocation();

    const [isdropdownactive, setisdropdownactive] = useState(false)


    return (
        <>
            <li className={location.pathname === item.link ? "bg-[#F5F6FA] w-full py-3 flex justify-center items-center text-[#F8991D] my-6 border-l-[0.3rem] border-amber-500" : "py-3 flex justify-center items-center text-[#232323] my-6"} onClick={() => {
                setisdropdownactive(!isdropdownactive)
            }} >
                {item.link ?
                    <a href={item.link} className="flex items-center  w-[70%] text-left" >
                        <span className='mr-2'>
                            <img src={item.icon} />
                        </span>
                        <h4>{item.title}</h4>
                        {item.children ? isdropdownactive ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp /> : null}
                    </a> : <a className="flex items-center  w-[70%] text-left" >
                        <span className='mr-2'>
                            <img src={item.icon} />
                        </span>
                        <h4>{item.title}</h4>
                        {item.children ? isdropdownactive ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown /> : null}
                    </a>}
            </li>
            {
                isdropdownactive ?
                    item.children ?
                        item.children.map((data) => (
                            <li className={location.pathname === data.link ? "bg-[#F5F6FA] w-full py-3 flex justify-center items-center text-[#F8991D] my-3 border-l-[0.3rem] border-amber-500" : "py-3 flex justify-center items-center text-[#232323] my-3 ml-6"} >
                                <a href={data.link} className="flex items-center  w-[70%] text-left" >
                                    <span className='mr-2'>
                                        {data.icon ? <img src={item.icon} /> : null}
                                    </span>
                                    <h4 className='text-[16px]'>{data.title}</h4>
                                </a>
                            </li>
                        ))
                        : null : null
            }

        </>
    )
}

export default SidebarContent
