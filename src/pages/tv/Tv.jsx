import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'flowbite-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import data_analytics from "../../assets/data_analytics.svg"
import { GoSearch } from "react-icons/go"

import axiosClient from '../../services/apiClient'
import Loader from '../../components/Loader'



function Tv() {

    const [series, setseries] = useState([]);
    const [loading, setloading] = useState(false)

    const [nextPage, setnextPage] = useState(1)

    const [searchQuery, setsearchQuery] = useState("")
    const [isSearchloading, setisSearchloading] = useState(false)



    const getSeries = async () => {
        setloading(true)
        try {
            const res = await axiosClient.get(`/student/get_plc_tvcontent?page=${nextPage}`)
            console.log(res)

            if (series.length > 0) {
                setseries([...series, ...res.data.data])
            } else {
                setseries(res.data.data)
            }

            // setnextPage(nextPage + 1)
            console.log(nextPage)

        } catch (error) {
            console.log(error.response)
        }
        setloading(false)

    }

    // useEffect(() => {

    //     getSeries()
    // }, [nextPage])

    const searchTv = async () => {
        setisSearchloading(true)
        try {
            const formdata = new FormData()
            formdata.append("search_title", searchQuery)
            const res = await axiosClient.post(`/student/search_pluralcode_tv`, formdata)
            console.log('res', res)

            setseries(res.data.data)

        } catch (error) {
            console.error(error.response)
        }
        setisSearchloading(false)

    }



    useEffect(() => {
        getSeries()
    }, [nextPage])


    // live saver for infinite scroll
    const handleScrollx = (e) => {
        const bottom = Math.abs(e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop) < 1;
        if (bottom) { setnextPage(nextPage + 1) }
    }

    return (
        <DashboardLayout>
            <div className="h-[2.4rem] bg-gray-200 border-2 border-gray-300 w-full rounded flex items-center ml-auto mr-[30px]">
                {
                    isSearchloading ? <Spinner
                        color="warning"
                        aria-label="Warning spinner example"
                    />
                        :
                        <GoSearch size={20} className="text-gray-400 ml-2" onClick={() => searchTv()} />
                }
                <input type="text" value={searchQuery} onChange={(text) => setsearchQuery(text.target.value)} className="border-0 border-transparent focus:border-transparent focus:ring-0 bg-transparent h-[2.4rem] w-full text-gray-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pr-6 h-screen overflow-scroll" onScroll={handleScrollx}>

                {

                    series.length > 0 ?
                        series.map((item) => (
                            <TvCard item={item} />
                        )) : !loading ?
                            series.length > 0 ?
                                series.map((item) => (
                                    <TvCard item={item} />
                                )) : "no Tv content found" :
                            <Loader />
                }
            </div>
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