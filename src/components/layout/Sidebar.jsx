import React from 'react'
import logo from "../../assets/logo.svg"
import sidebardata from '../../data/sidebardata';
import SidebarContent from './sidebarContent';
import { Avatar, Dropdown } from "flowbite-react"
import useNavToggle from '../../store/sidebartoggle'
import close_icon from "../../assets/close_icon.svg"
import { getUser } from '../../services/storage/user';


function Sidebar() {
    const toggleSideBar = useNavToggle((state) => state.toggle)

    const user = JSON.parse(getUser());
    console.log(user)

    return (
        <div className='bg-white h-screen md:h-full overflow-y-auto border-r border-[#EAEAEA] '>
            <div className="h-[4.5rem] p-3 mb-8 flex justify-between items-center">
                <img src={logo} className="h-[2rem] w-full hidden md:block mx-auto" alt="pluralcode logo" />
                <div className='flex block md:hidden'>
                    <Dropdown
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                        arrowIcon={false}
                        inline={true}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user.name}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user.email}
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
                            {user.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            Student ID: {user.id}
                        </div>
                    </div>
                </div>
                <img src={close_icon} className="h-[2rem] w-[20%] block md:hidden " alt="pluralcode logo" onClick={toggleSideBar} />
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
