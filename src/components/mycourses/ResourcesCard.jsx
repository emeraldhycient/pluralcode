import React from 'react'

function ResourcesCard({ resource }) {
    return (
        <a href={`${resource?.course_docs}`} className="text-[#323232]">
            {/* <a href={`/student/docviewer/${resource?.course_docs_title}/${resource?.course_docs}`} className="text-[#323232]"> */}
            <div className='flex gap-4 my-2 border-b border-b-gray-300 px-5 py-3'>
                <div className="col-span-1 text-right">
                    <img src="https://i.im.ge/2022/10/22/2trTt4.Frame.jpg" alt="" />
                </div>
                <div className="col-span-4 w-full text-left">
                    <h5 className='text-[16px] text-[#323232]'>{resource ? resource?.course_docs_title : "loading course title"}</h5>
                    <p className='text-[14px] mt-2 text-[#494949]'>Sept 2, 2022</p>
                </div>
            </div>
        </a>
    )
}

export default ResourcesCard