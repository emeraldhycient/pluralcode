import React, { useEffect } from 'react'
import { Tabs } from 'flowbite-react'
import { BsWalletFill } from "react-icons/bs"
import { useParams } from 'react-router-dom'


import DashboardLayout from '../../components/layout/DashboardLayout'
import CourseCard from '../../components/common/CourseCard'
import schoolsdata from '../../data/schoolsdata'

import DashboardData from '../../store/DashboardData'
import axiosClient from '../../services/apiClient'
import MyCourseCard from '../../components/mycourses/MyCourseCard'
import CertificateCards from '../../components/mycourses/CertificateCards'

function Mycourses() {

    const { school } = useParams();

    const Data = DashboardData((state) => state.data);
    console.log(Data)
    const StoreData = DashboardData((state) => state.storeData)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosClient.get("/student/dashboard_api");
                StoreData(res.data)
                sessionStorage.setItem("dashboard", JSON.stringify(res.data))
                // console.log(res.data)
            } catch (error) {
                console.log(error.response)
            }
        }

        fetchData()
    }, [])

    // console.log(Data)


    return (
        <DashboardLayout>

            <div className=" mt-6 md:mt-6">
                <Tabs.Group
                    aria-label="pluralcode schools"
                    style="underline"
                >
                    <Tabs.Item
                        title="My Courses"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white h-fit  my-4 rounded-tl-3xl rounded-br-3xl py-6 px-4">
                            <MyCourseCard />
                            <MyCourseCard />
                            <MyCourseCard />
                            <MyCourseCard />
                        </div>

                    </Tabs.Item>
                    <Tabs.Item
                        title="Certificates"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white h-fit  my-4 rounded-[8px] py-6 px-4">
                            <CertificateCards />
                            <CertificateCards />
                            <CertificateCards />
                        </div>
                    </Tabs.Item>


                </Tabs.Group>
            </div>

        </DashboardLayout>
    )
}

export default Mycourses
