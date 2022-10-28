import React from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'
import data_analytics from "../../assets/data_analytics.svg"

function Tv() {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pr-6">
                <TvCard />
                <TvCard />
                <TvCard />
                <TvCard />
                <TvCard />
            </div>
        </DashboardLayout>
    )
}

const TvCard = () => (
    <div
        className="bg-white h-fit  my-4 rounded-tl-3xl rounded-br-3xl py-6 px-3 mb-4"
        data-aos="fade-right"
        data-aos-duration="2000"
    >  <div >
            <img
                src={data_analytics}
                alt="product"
                className="w-[100%]  rounded-tl-3xl rounded-br-3xl"
                data-aos="fade-right"
                data-aos-duration="2000"
            />
        </div>
        <div className="pb-4 flex flex-col justify-center mt-4">
            <h1
                className="text-[25px] text-[#222057] font-medium mb-4"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                Azure Cloud Computing
            </h1>
            <p
                className="font-gilroyregular text-sm  lg:text-left  font-extralight text-[#323232] mb-2"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                Learn to use popular Cloud platforms, understand Cloud computing concepts and technologies apply virtualization and its use in Infrastructure development.
            </p>
            <div className="w-fit mt-3 flex">
                <h4 className="semibold pr-1">12 weeks | </h4>
                <h4 className="bold">230k Views | </h4>
                <button
                    className="text-amber-500 text-[18px] text-white px-2 rounded w-fit  lg:mx-0 lg:w-fit flex justify-center items-center"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    <Link to={``} className="flex items-center">
                        Learn More
                    </Link>
                </button>
            </div>
        </div>
    </div>
)

export default Tv