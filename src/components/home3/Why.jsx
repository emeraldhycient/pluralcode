import React from 'react'
import image from "../../assets/images/diploma/why.svg"

function Why() {
    return (
        <section className=" h-fit lg:h-screen py-12 lg:py-36 w-screen bg-white" id='why'>
            <div className="grid md:grid-cols-2 w-11/12 md:w-10/12  mx-auto">
                <div className="">
                    <img src={image} className="h-[80%] mx-auto" alt="" />
                </div>
                <div className="h-full flex flex-col justify-center">
                    <h1 className="text-3xl md:text-[44px] font-bold  text-[#222057] font-gilroy text-center md:text-left  w-full align-left mb-10 md:mb-10 leading-snug	">
                        Institution of Continuous <span className='text-amber-500'> <br className="hidden lg:block" /> Tech Education</span>
                    </h1>
                    <p className="w-[85%] md:w-[100%] mx-auto font-gilroyregular text-[18px] text-left lg:text-left  font-extralight text-[#232323] mb-8">
                    Pluralcode is one of Africa's fastest growing institutions of continuous tech education. Our mission is to train thousands of people every year and help them gain entry into the global tech space. With a long track record, world-class standards and internationally backed certificates, you can trust us to chart a clear and successful course for your tech career.
                    </p>
                    
                </div>
            </div>
        </section>
    )
}

export default Why