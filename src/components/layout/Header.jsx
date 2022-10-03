import React from 'react'
import { Avatar, Dropdown } from "flowbite-react"
import { GoSearch } from "react-icons/go"

function Header() {
    return (
        <div className='bg-white h-[4.5rem]  border-b border-[#EAEAEA]  flex justify-between items-center px-5'>

            <div className="h-[2.4rem] bg-[#F5F6FA] w-96 rounded flex items-center">
                <GoSearch size={20} className="text-gray-400 ml-2" />
                <input type="text" className="border-0 border-transparent focus:border-transparent focus:ring-0 bg-transparent h-[2.4rem] w-full text-gray-500" />
            </div>

            <div className='flex'>
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
    )
}

export default Header
