import React from 'react'
import logo from "../../assets/logo.svg"
import menu_icon from "../../assets/menu_icon.svg"
import useNavToggle from '../../store/sidebartoggle'

function HeaderMobile() {

    const toggleSideBar = useNavToggle((state) => state.toggle)

    return (
        <div className='bg-white h-[4.5rem]  border-b border-[#EAEAEA]   justify-between items-center px-5 flex md:hidden'>
            <img src={logo} className="h-full w-[60%]" alt="pluralcode logo" />
            <img src={menu_icon} className="h-[2rem] w-[20%]" alt="pluralcode logo" onClick={toggleSideBar} />
        </div>
    )
}

export default HeaderMobile
