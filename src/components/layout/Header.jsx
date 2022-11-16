import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Dropdown } from "flowbite-react"
import { GoSearch } from "react-icons/go"
import message_question_icon from "../../assets/message_question_icon.svg"
import { FaBell } from "react-icons/fa"
import { getUser } from '../../services/storage/user'
import axiosClient from '../../services/apiClient'

function Header() {

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
        <div className='bg-white h-[4.5rem]  border-b border-[#EAEAEA]   justify-between items-center px-5 hidden md:flex'>

            <div className="h-[2.4rem] bg-[#F5F6FA] w-96 rounded flex items-center invisible">
                <GoSearch size={20} className="text-gray-400 ml-2" />
                <input type="text" className="border-0 border-transparent focus:border-transparent focus:ring-0 bg-transparent h-[2.4rem] w-full text-gray-500" />
            </div>

            <div className='flex items-center'>
                <a href='/student/advisors' className='h-[2rem] w-24'>
                    <img src={message_question_icon} className="h-[2rem] w-24 " alt="question logo" />
                </a>
                <a href='/student/notifications' className='w-12'>
                    <FaBell size={20} color='#323232' />
                </a>
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

        </div>
    )
}

export default Header
