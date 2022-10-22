import React, { useEffect, useState } from 'react'
import MyCourseCard from '../../components/mycourses/MyCourseCard'
import axiosClient from '../../services/apiClient'


function Tab1() {

    const [courses, setcourses] = useState([])

    useEffect(() => {

        const getcourses = async () => {
            try {
                const res = await axiosClient.get("/student/get_enrolled_courses?nav=my_courses")
                console.log(res.data)
                setcourses(res.data)
            } catch (error) {
                console.log(error.response.data)
            }
        }

        getcourses()

    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white h-fit  my-4 rounded-tl-3xl rounded-br-3xl py-6 px-4">
            {
                courses.length > 0 ?
                    courses.map((course) => (
                        <MyCourseCard course={course} key={course.id} />
                    ))
                    : "Courses you are currently taking will show here"
            }
        </div>
    )
}

export default Tab1