import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'flowbite-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import data_analytics from "../../assets/data_analytics.svg"

import axiosClient from '../../services/apiClient'
import Loader from '../../components/Loader'
import InfiniteScroll from 'react-infinite-scroller';


function Tv() {

    const [series, setseries] = useState([]);
    const [loading, setloading] = useState(false)

    const [nextPage, setnextPage] = useState(1)

    const getSeries = async () => {
        setloading(true)
        try {
            const res = await axiosClient.get(`/student/get_plc_tvcontent?page=${nextPage}`)
            console.log(res)

            setseries(res.data.data)

            setnextPage(nextPage + 1)

        } catch (error) {
            console.log(error.response)
        }
        setloading(false)

    }

    // useEffect(() => {

    //     getSeries()
    // }, [nextPage])


    return (
        <DashboardLayout>
            {/* {
                    !loading ?

                        series.length > 0 ?
                            series.map((item) => (
                                <TvCard item={item} />
                            )) : "no data"

                        : <Loader />
                } */}

            <InfiniteScroll
                pageStart={nextPage}
                loadMore={getSeries}
                hasMore={true || false}
                loader={<Loader />}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pr-6">
                    {

                        series.length > 0 ?
                            series.map((item) => (
                                <TvCard item={item} />
                            )) : "no data"}
                </div>
            </InfiniteScroll>


        </DashboardLayout>
    )
}

const TvCard = ({ item }) => {

    const [showMore, setShowMore] = useState(false);


    return (
        <div
            className="bg-white h-[] my-4 rounded-tl-3xl rounded-br-3xl py-6 px-3 mb-4"
            data-aos="fade-right"
            data-aos-duration="2000"
        >  <div >

                <iframe src={item.video_link ? item.video_link : data_analytics}
                    className="w-[100%]  rounded-tl-3xl rounded-br-3xl h-56"
                    allowFullScreen="true" webkitallowfullscreen="true" sandbox="allow-same-origin allow-scripts"></iframe>
                {/* 
            <video src={item.video_link ? item.video_link : data_analytics}
                className="w-[100%]  rounded-tl-3xl rounded-br-3xl h-56"
                controls
            ></video> */}

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
                    {showMore ? item.content_description : `${item.content_description.substring(0, 150)}`}
                    {item.content_description.length > 150 ? <button className="text-amber-500 ml-2" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button> : ""}

                </p>

            </div>
        </div>
    )
}

export default Tv