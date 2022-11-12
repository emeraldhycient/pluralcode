import React from 'react'
import { useParams } from 'react-router-dom'

import DashboardLayout from '../layout/DashboardLayout'

const DocViewer = () => {

    const { name, fileurl } = useParams();
    return (
        <DashboardLayout>
            <div className="h-fit w-full bg-white px-4 md:px-10 py-3 md:py-7">
                <h5 className='text-[24px] font-semibold text-[#222057] mb-5'>{name ? name : "Introduction to User Experience Design"}</h5>
                <iframe src={fileurl ? fileurl : "https://drive.google.com/file/d/1t3FgLszhNxVuA8uU367s8x-e-iwhx5r_/preview"}
                    className="w-[100%] h-[70vh]  rounded-tl-3xl rounded-br-3xl"
                    allow="autoplay" allowFullScreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts"></iframe>
            </div>
        </DashboardLayout>
    )
}

export default DocViewer