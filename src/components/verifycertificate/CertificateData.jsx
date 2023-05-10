import React from 'react'

function CertificateData({ data }) {
    return (
        <section className="h-fit w-screen px-10 md:px-20 mt-20">
            <h1 className="mx-auto text-[28px] font-medium   font-gilroy text-center  w-full align-center text-[#222057] mb-20 lg:leading-tight	">
                View Certificate
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full md:w-10/12 mx-auto text-center flex flex-col justify-center items-center">
                    <img src="https://i.im.ge/2023/05/09/UDVOe6.Group-20383.png" className="h-[120px]  w-[120px] mx-auto" alt="" />
                    <p className="mt-10 md:mt-20">Student verification  was successfully</p>
                </div>
                <div className="bg-white py-10 px-3 md:p-10 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* <div className="">
                          <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                              Student First Name
                          </p>
                          <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[#939393] text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                              John Doe
                          </p>
                      </div> */}
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                Student Name
                            </p>
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[#939393] text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                {data.first_name}
                            </p>
                        </div>
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                Student Email *
                            </p>
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[#939393] text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                {data.email}
                            </p>
                        </div>
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                Cohort
                            </p>
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[#939393] text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                {data?.cohort}
                            </p>
                        </div>
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                Start Date
                            </p>
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[#939393] text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                               {data?.start_date}
                            </p>
                        </div>
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                End Date
                            </p>
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[#939393] text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                               {data?.end_date}
                            </p>
                        </div>
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                Course Name
                            </p>
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[#939393] text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                {data?.course_name}
                            </p>
                        </div>
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                Course Level
                            </p>
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[#939393] text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                {data?.course_level}
                            </p>
                        </div>
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                Date Issued
                            </p>
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[#939393] text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                {data?.date_issued}
                            </p>
                        </div>
                        {
                            data?.cert_link ? 
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                Certificate link
                            </p>
                            <a href={data?.cert_link} target="_blank" rel="noreferrer" className="border bg-amber-500 mx-auto md:mx-0  text-white px-8 py-2 text-[12px] rounded mt-3  w-[80%]  flex justify-center items-center">
                                Open
                            </a>
                                </div>
                                : null
                        }
                        {
                            data?.transcript_link ?
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                Transcript link
                            </p>
                            <a href={data?.transcript_link} target="_blank" rel="noreferrer" className="border bg-amber-500 mx-auto md:mx-0  text-white px-8 py-2 text-[12px] rounded mt-3  w-[80%]  flex justify-center items-center">
                                Open
                            </a>
                        </div> : null
                        }
                        <div className="">
                            <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[#939393] text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                Accredited by
                            </p>
                            <div className="">
                                <img src={data?.accredited_by} alt="" />
                            </div>
                        </div>
                        {
                            data?.acc_cert ?
                                <div className="">
                                    <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] mb-5">
                                        Accredited Certificate link
                                    </p>
                                    <a href={data?.acc_cert} target="_blank" rel="noreferrer" className="border bg-amber-500 mx-auto md:mx-0  text-white px-8 py-2 text-[12px] rounded mt-3  w-[80%]  flex justify-center items-center">
                                        Open
                                    </a>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CertificateData