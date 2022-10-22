import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axiosClient from '../../services/apiClient'
import VideoCard from '../../components/mycourses/VideoCard'


function CourseDetailvideo() {

    const [videos, setvideos] = useState([])

    const { course, id } = useParams()

    useEffect(() => {

        const getvideos = async () => {
            try {

                const data = new FormData();
                data.append("course_id", id)
                data.append("nav", "videos")


                const res = await axiosClient.post("/student/get_enrolled_course_details", data)
                console.log(res.data.data)
                setvideos(res.data.data)
            } catch (error) {
                console.log(error.response.data)
            }
        }

        getvideos()

    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 bg-white h-fit   my-4 rounded-tl-3xl rounded-br-3xl py-6 w-full">
            {
                videos.length > 0 ?
                    videos.map((vid) => (
                        <VideoCard vid={vid} />

                    )) : "Videos for this course would be shown here"
            }
        </div>
    )
}

export default CourseDetailvideo