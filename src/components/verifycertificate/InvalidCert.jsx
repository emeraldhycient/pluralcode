import React from 'react'

function InvalidCert({ data }) {
    return (
        <section className="h-fit w-screen px-10 md:px-20 mt-20">
            <h1 className="mx-auto text-[28px] font-medium   font-gilroy text-center  w-full align-center text-[#222057] mb-20 lg:leading-tight	">
                View Certificate
            </h1>
            <div className="h-full md:w-10/12 mx-auto text-center flex flex-col justify-center items-center pb-32">
                <img src="https://i.im.ge/2023/05/10/U0jio1.Group-20385.png" className="h-[120px]  w-[120px] mx-auto" alt="" />
                <p className="mt-10 md:mt-20">Invalid Certificate ID</p>
            </div>
        </section>
    )
}

export default InvalidCert