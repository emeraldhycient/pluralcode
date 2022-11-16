import React from 'react'
import logo from "../../assets/logo.svg"
import sidebardata from '../../data/sidebardata';
import SidebarContent from './sidebarContent';
import { Avatar, Dropdown } from "flowbite-react"
import useNavToggle from '../../store/sidebartoggle'
import close_icon from "../../assets/close_icon.svg"
import { getUser } from '../../services/storage/user';
import axiosClient from '../../services/apiClient'
import { useNavigate } from 'react-router-dom'


function Sidebar() {
    const toggleSideBar = useNavToggle((state) => state.toggle)

    const user = JSON.parse(getUser());
    const navigate = useNavigate()

    const signOut = async () => {
        if (
            confirm("Are you sure you want to sign out?")
        ) {
            try {
                const res = await axiosClient.post(`/student/logout`)
                localStorage.clear()
                sessionStorage.clear()
                navigate('/login')
            } catch (error) {
                console.log(error)
            }
        }
    }


    return (
        <div className='bg-white h-screen md:h-full overflow-y-auto border-r border-[#EAEAEA] '>
            <div className="h-[4.5rem] p-3 mb-8 flex justify-between items-center">
                <img src={logo} className="h-[2rem] w-full hidden md:block mx-auto" alt="pluralcode logo" />
                <div className='flex block md:hidden'>
                    <Dropdown
                        label={<Avatar alt="User settings" img={`https://ui-avatars.com/api/?name=${user.name}`} rounded={true} />}
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
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={signOut}>
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
