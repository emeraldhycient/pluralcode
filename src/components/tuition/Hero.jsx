import React from 'react'
import logo from "../../assets/images/logo.svg";

function Hero() {
    return (
        <section style={{
            backgroundImage: `url(https://i.im.ge/2023/03/21/DZd026.Group-20664-1.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
            className="h-fit md:h-[65vh] lg:h-[100vh] w-screen pt-4 lg:pt-12  flex flex-col">
            <div className="">
                <img
                    src={"https://i.im.ge/2023/03/21/DZdaix.PluralCode-4.png"}
                    className="mr-3 ml-6 h-6 sm:h-9 ml-10"
                    alt="pluralcode Logo"
                />
            </div>

            <div className="w-11/12 md:w-8/12 lg:w-8/12 mx-auto text-center mt-16">
                <h1
                    className="text-3xl md:text-[76px] font-bold  font-gilroy  w-full align-left text-white mb-4 leading-relaxed	  md:leading-tight text-center"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    Pluralcode Tuition Fees
                </h1>
                <h4 className='text-white text-[14px] md:text-[24px] text-center mb-1 md:mb-4'>Tuition breakdown for pluralcode academy programs</h4>
                <p
                    className="font-gilroyregular text-[14px] md:text-[16px] text-center  font-extralight text-white mb-8"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    Note: Our tuition rates are subject to review at any time and without prior notice. Only students who have paid tuition or ‘reserved their admission’ are exempt from any increase or review
                </p>
            </div>
            <div
                className="h-72 md:h-[53%] w-full"
                style={{
                    backgroundImage: `url(https://i.im.ge/2023/03/21/DZdE24.Group-5047.png)`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
        </section>)
}

export default Hero

// https://i.im.ge/2023/03/21/DZ2VLm.Frame-5037.png