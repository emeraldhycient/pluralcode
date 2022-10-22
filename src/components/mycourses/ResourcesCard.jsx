import React from 'react'

function ResourcesCard() {
    return (
        <div className='flex gap-4 my-2 border-b border-b-gray-300 px-5 py-3'>
            <div className="col-span-1 text-right">
                <img src="https://i.im.ge/2022/10/22/2trTt4.Frame.jpg" alt="" />
            </div>
            <div className="col-span-4 w-full text-left">
                <h5 className='text-[16px] text-[#323232]'>Introduction to User Experience Design.pdf</h5>
                <p className='text-[14px] mt-2 text-[#494949]'>Sept 2, 2022</p>
            </div>
        </div>
    )
}

export default ResourcesCard