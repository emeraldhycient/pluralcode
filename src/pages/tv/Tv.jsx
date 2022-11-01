import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'flowbite-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import data_analytics from "../../assets/data_analytics.svg"

import axiosClient from '../../services/apiClient'

function Tv() {

    const [series, setseries] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const getSeries = async () => {
            setloading(true)
            try {
                const res = await axiosClient.get('/student/get_plc_tvcontent')
                console.log(res)

                setseries(res.data)

            } catch (error) {
                console.log(error.response)
            }
        }
        getSeries()
        setloading(false)
    }, [])


    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pr-6">
                {
                    !loading ?

                        series.length > 0 ?
                            series.map((item) => (
                                <TvCard item={item} />
                            )) : "no data"

                        : <Spinner
                            color="warning"
                            aria-label="Warning spinner example"
                        />
                }
            </div>
        </DashboardLayout>
    )
}

const TvCard = ({ item }) => (
    <div
        className="bg-white h-fit  my-4 rounded-tl-3xl rounded-br-3xl py-6 px-3 mb-4"
        data-aos="fade-right"
        data-aos-duration="2000"
    >  <div >

            <iframe src={item.video_link ? item.video_link : data_analytics}
                className="w-[100%]  rounded-tl-3xl rounded-br-3xl h-56"
                allowFullScreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts"></iframe>

        </div>
        <div className="pb-4 flex flex-col justify-center mt-4">
            <h1
                className="text-[25px] text-[#222057] font-medium mb-4"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                {item.content_name}
            </h1>
            <p
                className="font-gilroyregular text-sm  lg:text-left  font-extralight text-[#323232] mb-2"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                {item.content_description}
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