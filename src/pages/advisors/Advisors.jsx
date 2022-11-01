import { useState, useEffect } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { IoLogoWhatsapp } from "react-icons/io"
import { Spinner } from 'flowbite-react'
import axiosClient from '../../services/apiClient'


function Advisors() {



    const [advisors, setadvisors] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const getadvisors = async () => {
            setloading(true)
            try {
                const res = await axiosClient.get('/student/get_student_advisors')
                console.log(res)

                setadvisors(res.data)

            } catch (error) {
                console.log(error.response)
            }
        }
        getadvisors()
        setloading(false)
    }, [])

    return (
        <DashboardLayout>
            <div className="bg-white h-fit rounded-[8px] p-10">
                <div className="w-full md:w-[70%]">
                    <h4 className='text-[28px] text-[#222057]'>PluralCode Student Advisors</h4>
                    <p className='text-[16px] text-[#323232] my-4'>Are you skeptical about course of choice or how our programs work? Speak with our student advisors to get a better guidance. Below is a list of our student advisors for all the courses offered here at PluralCode, kindly reach out...</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
                    {
                        !loading ?
                            advisors.map((item) => (
                                <AdvisorsCard item={item} />
                            ))
                            : <Spinner
                                color="warning"
                                aria-label="Warning spinner example"
                            />
                    }
                </div>
            </div>
        </DashboardLayout>
    )
}



const AdvisorsCard = ({ item }) => (
    <div className="h-[500px] w-full bg-[#F5F6FA] py-12" style={{
        borderWidth: "1px 16px 0px 0px", borderStyle: "solid", borderColor: "rgba(34, 32, 87, 0.08)",
        borderRadius: "32px 0px"
    }}>
        <div className="h-[50%] w-full flex justify-center items-center">
            <img src={item.image} alt="" />
        </div>
        <div className="h-[50%] flex flex-col justify-center items-center">
            <h3 className='text-amber-500 text-[20px]'>{`${item.first_name}${item.last_name}`}</h3>
            <p className='text-[17px] text-[#323232] text-center my-1'>{item.school_assigned_to}</p>
            <h3 className='text-[#232323] text-[20px] font-semibold'>{item.phone_number}</h3>
            <div className="grid grid-cols-2 gap-4 mt-4 w-full px-12">
                <a href={`https://wa.me/${item.phone_number}`} className="col-span-1 h-[30px]  border border-[#222057] rounded-[8px] flex items-center justify-center">
                    <IoLogoWhatsapp size={20} color="#222057" />
                    <h6 className='ml-2 text-sm'>chat</h6>
                </a>
                <a href={`tel:+${item.phoneNumber}`} className="col-span-1 h-[30px]   bg-[#222057] rounded-[8px] flex items-center justify-center">
                    <h6 className='text-white text-sm'>Call Now</h6>
                </a>
            </div>
        </div>
    </div>
)

export default Advisors