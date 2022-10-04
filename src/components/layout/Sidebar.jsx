import React from 'react'
import logo from "../../assets/logo.svg"
import sidebardata from '../../data/sidebardata';
import SidebarContent from './sidebarContent';
import { Avatar, Dropdown } from "flowbite-react"


function Sidebar() {



    return (
        <div className='bg-white h-screen md:h-full overflow-y-auto border-r border-[#EAEAEA] '>
            <div className="h-[4.5rem] p-3 mb-8">
                <img src={logo} className="h-full w-full hidden md:block" alt="pluralcode logo" />
                <div className='flex block md:hidden'>
                    <Dropdown
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                        arrowIcon={false}
                        inline={true}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Mabel Praise
                            </span>
                            <span className="block truncate text-sm font-medium">
                                MabelPraise@pluralcode.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <div className=" font-medium dark:text-white ml-2">
                        <div>
                            Mabel Praise
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            Student ID: COH3456
                        </div>
                    </div>
                </div>
            </div>
            <ul className="">
                {
                    sidebardata.map((item, i) => (
                        <SidebarContent key={i} item={item} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar
