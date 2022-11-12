import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import CertificateCards from '../../components/mycourses/CertificateCards'
import axiosClient from '../../services/apiClient'


function Tab2() {

    const [certificate, setcertificate] = useState([])
    const [isloading, setisloading] = useState(false)


    useEffect(() => {

        const getcertificate = async () => {
            setisloading(true)
            try {
                const res = await axiosClient.get("/student/get_enrolled_courses?nav=certificate")
                console.log(res.data)
                setcertificate(res.data)
            } catch (error) {
                console.log(error.response.data)
            }
            setisloading(false)
        }

        getcertificate()

    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white h-fit  my-4 rounded-[8px] py-6 px-4">
            {
                !isloading ?
                    certificate.length > 0 ?
                        certificate.map((cert) => (

                            <CertificateCards cert={cert} />
                        ))
                        : "certificates you earned would show here"
                    : <Loader />
            }

        </div>
    )
}

export default Tab2