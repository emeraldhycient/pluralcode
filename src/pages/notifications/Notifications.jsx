import React, { useState, useEffect } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import axiosClient from '../../services/apiClient'

function Notifications() {

    const [data, setdata] = useState([])
    useEffect(() => {
        const getNotifi = async () => {
            try {
                const res = await axiosClient.get("get_notification_list")
                // console.log(res);
                setdata(res.data)
            } catch (error) {
                console.error(error.response);
            }
        }
        getNotifi();
    }, [])


    return (
        <DashboardLayout> <div className="bg-white h-fit rounded-[8px] p-5 md:p-10">
            <h4 className='text-[28px] text-[#222057]'>Notifications</h4>
            <div className=" mt-8">
                {
                    data.length > 0 ?
                        data.map((item) => (
                            <NotificationCard item={item} key={item.id} />

                        )) : <NotificationCard item={{ body: "No Notifications", date: "" }} />
                }

            </div>
        </div>
        </DashboardLayout>
    )
}

const NotificationCard = ({ item }) => (
    <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
            <div className="bg-gray-200 h-3 md:h-4 w-3 md:w-4 rounded-full mr-2"></div>
            <p className='text-sm text-[#232323]'>{item.body}</p>
        </div>
        <p className="text-xs">{item.date}</p>
    </div>
)

export default Notifications