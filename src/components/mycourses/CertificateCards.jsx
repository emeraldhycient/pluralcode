import React, { useState } from 'react'
import CertificateModal from './CertificateModal'

function CertificateCards({ cert }) {

    const [ismodalshowing, setismodalshowing] = useState(false)


    return (
        <div className='h-fit md:h-[200px] bg-[#F5F6FA] rounded-[8px] grid grid-cols-1 md:grid-cols-5 gap-3 py-6 px-3 mb-4'>
            <div className="col-span-2 h-full">
                {/* <img src={cert ? cert?.certificate : "https://i.im.ge/2022/10/20/26SwxM.Frame-1037.png"} className='rounded-[8px]' alt="" /> */}
                <iframe src={cert ? cert?.certificate : "https://i.im.ge/2022/10/20/26SwxM.Frame-1037.png"} className='rounded-[8px]' allow="autoplay"></iframe>

            </div>
            <div className="col-span-3 h-full flex flex-col md:items-center justify-center">
                <h4 className='text-[20px] text-[#222057] mb-3'>Product Management</h4>
                <p className='text-[14px] text-[#323232] mb-4'>Successfully Completed</p>
                <button className="p-1 w-[70%] border border-[#222057] rounded-lg"><a download="mabel-praise-product-design.png" href="https://i.im.ge/2022/10/20/26SwxM.Frame-1037.png" className='text-decoration-none' >Download</a></button>
                <button
                    className="text-amber-500 text-[18px] text-white px-2 py-2 rounded w-fit  lg:w-fit mt-3 md:ml-32"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    onClick={() => setismodalshowing((prev) => !prev)}
                >
                    View
                </button>
                {ismodalshowing ?
                    <CertificateModal url={cert?.certificate} setismodalshowing={setismodalshowing} /> : ""}
            </div>
        </div>
    )
}

export default CertificateCards