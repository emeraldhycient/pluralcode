import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axiosClient from '../../services/apiClient'
import ResourcesCard from '../../components/mycourses/ResourcesCard'
import Loader from '../../components/Loader'


function CourseDetailDoc() {

    const [resources, setresources] = useState([])
    const [isloading, setisloading] = useState(false)

    const { course, id } = useParams()

    useEffect(() => {

        const getresources = async () => {
            setisloading(true)
            try {

                const data = new FormData();
                data.append("course_id", id)
                data.append("nav", "resources")
                const res = await axiosClient.post("/student/get_enrolled_course_details", data)
                console.log(res.data.data)
                setresources(res.data.data)
            } catch (error) {
                console.log(error.response.data)
            }
            setisloading(false)
        }

        getresources()

    }, [])

    return (
        <div className="grid grid-cols-1   gap-4 bg-white h-fit   my-4 rounded-tl-3xl rounded-br-3xl py-6 w-full">
            {
                !isloading ?
                    resources.length > 0 ?
                        resources.map((resource) => (
                            <ResourcesCard resource={resource} />

                        )) : "Document Rescources for this course will be shown here"
                    : <Loader />
            }
        </div>
    )
}

export default CourseDetailDoc