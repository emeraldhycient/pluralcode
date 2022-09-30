import React from 'react'
import logo from "../../assets/logo.svg"

function Sidebar() {
    return (
        <div className='bg-white h-full overflow-y-auto border-r border-gray-200 shadow'>
            <div className="h-[4.5rem] p-3">
                <img src={logo} className="h-full w-full" alt="pluralcode logo" />
            </div>
        </div>
    )
}

export default Sidebar
