import React from 'react'
import image from "../../assets/images/diploma/grad.svg"

function Graduate() {
    return (
        <section className=" h-fit  py-12 lg:py-16 w-screen bg-[#23205712]">
            <div className="grid md:grid-cols-2 w-11/12 md:w-10/12  mx-auto">
                <div className="h-full flex justify-cemter items-center">
                    <img src={image} className="h-[70%] mx-auto" alt="" />
                </div>
                <div className="h-full flex flex-col justify-center">
                    <h1 className="text-3xl md:text-[44px] font-bold text-[#222057] font-gilroy text-left w-full align-left mb-10 md:mb-10 leading-snug	">
                        Graduate With <span className='text-amber-500'>Major <br className="hidden lg:block" /> Honors:</span>
                    </h1>
                    <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[18px] text-left lg:text-left  font-extralight text-[#232323] mb-8">
                        After your studies, you will be armed with major awards and honors that will advance your career.
                    </p>
                    <div className="flex">
                        <div className="bg-amber-500 h-6 w-6 rounded-full mr-3"></div>
                        <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-left lg:text-left  font-extralight text-[#232323] mb-5">
                            Earn a globally-recognized Professional Diploma.
                        </p>
                    </div>
                    <div className="flex">
                        <div className="bg-amber-500 h-6 w-6 rounded-full mr-3"></div>
                        <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-left lg:text-left  font-extralight text-[#232323] mb-5">
                            Valid academic transcript and recommendation letter.
                        </p>
                    </div>
                    <div className="flex">
                        <div className="bg-amber-500 h-6 w-6 rounded-full mr-3"></div>
                        <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-left lg:text-left  font-extralight text-[#232323] mb-5">
                            Award for top performance in real case-study projects.
                        </p>
                    </div>
                    <div className="flex">
                        <div className="bg-amber-500 h-6 w-6 rounded-full mr-3"></div>
                        <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-left lg:text-left  font-extralight text-[#232323] mb-5">
                            Job Recommendations.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Graduate