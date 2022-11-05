import React, { useState } from 'react'
import { Modal, Label, TextInput, Spinner } from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import CustomButton from '../../components/CustomButton'
import DashboardLayout from '../../components/layout/DashboardLayout'
import VideoContainer from '../../components/exclusive/VideoContainer'
import Faq from '../../components/exclusive/Faq'

import ExclusiveCourses from "./data"
import axiosClient from '../../services/apiClient'


function Exclusive() {


    return (
        <DashboardLayout>
            <div className='h-fit w-full  rounded-[8px] bg-transparent md:bg-white p-5 mb-4'>
                <VideoContainer video_url={"https://res.cloudinary.com/gofitish/video/upload/v1663331212/videos/WhatsApp_Video_2022-09-16_at_1.17.41_PM_knyugc.mp4"} />
                <h3 className='text-[26px] md:text-[32px] text-[#222057] mb-5'>PluralCode Exclusive</h3>
                <p className='text-[16px] mb-2 text-[#323232]'>Data Analytics program provides a range of ​data and analytics​ training designed to help ​individuals as well as ​organisations​, ​enable new and existing internal resources through the use of key data science tools and platforms.
                </p>
                <p className='text-[16px] mb-2 text-[#323232]'>
                    The curriculum is robust and carefully​ designed to address the needs​ and deliver the basic requirements for ​any ​data scientists and big data analysts​ to make business impact
                </p>
            </div>
            <div className='h-fit w-full  rounded-[8px] bg-white p-5 mt-8 md:mt-20'>
                <h3 className='text-[26px] md:text-[32px] text-[#222057] mb-5'>Our Exclusive Program Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        ExclusiveCourses.map((item) => (
                            <ExclusiveCourseCard item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
            <div className='h-fit w-full  rounded-[8px] bg-white p-5 mt-16 md:mt-20'>
                <h3 className='text-[26px] md:text-[32px] text-[#222057] mb-5'>Frequently Asked Questions</h3>
                <Faq />
            </div>
        </DashboardLayout>
    )
}

const ExclusiveCourseCard = (item) => {

    const [isModalShowing, setisModalShowing] = useState(false)
    const [isloading, setisloading] = useState(false)

    const [phoneNumber, setphoneNumber] = useState("")
    const [email, setemail] = useState("")
    const [state, setstate] = useState("")
    const [address, setaddress] = useState("")
    const [message, setmessage] = useState("")

    const RequestExclusive = async (e) => {
        e.preventDefault()

        var data = new FormData();
        data.append('phone_number', phoneNumber);
        data.append('email', email);
        data.append('state', state);
        data.append('address', address);
        data.append('course', item.item.title);
        data.append('additional_message', message);
        setisloading(true)
        try {
            const response = await axiosClient.post("/student/exclusive_request_form", data)
            console.log(response)
            toast.success(res.data?.message ? res.data.message : "application received ,we would be in Contact soon ❤️", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setisModalShowing()
        } catch (error) {
            console.log(error.response.data)

            toast.error(`${error.response.data.message}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setisloading(false)

    }


    return (
        <div
            className="bg-[#F5F6FA] h-fit  my-4 rounded-tl-3xl rounded-br-3xl py-6 px-3 mb-4"
            data-aos="fade-right"
            data-aos-duration="2000"
        >
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div >
                <img
                    src={item.item.image}
                    alt="product"
                    className="w-[90%]  rounded-tl-3xl rounded-br-3xl"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                />
            </div>
            <div className="pb-4 flex flex-col justify-center mt-4">
                <h1
                    className="text-[25px] text-[#222057] font-medium mb-4"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {item.item.title}
                </h1>
                <p
                    className="font-gilroyregular text-sm  lg:text-left  font-extralight text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    {item.item.description}
                </p>
                <div className="w-fit mt-3" onClick={() => setisModalShowing(true)}>
                    <CustomButton>Apply Now</CustomButton>
                </div>
            </div>
            <React.Fragment>

                <Modal
                    show={isModalShowing}
                    // size="md"
                    // popup={true}
                    onClose={() => setisModalShowing(false)}
                >
                    <Modal.Header>
                        <h1
                            className="text-[20px] text-[#222057] font-medium mb-4"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            {item.item.title}
                        </h1>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-center">
                            <h1
                                className="text-[25px] text-[#222057] font-medium mb-4"
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                Request For Our Exclusive Program
                            </h1>
                        </div>

                        <form className="flex flex-col gap-4 px-3 md:px-8" onSubmit={RequestExclusive}>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="Select Course of Choice"
                                        value=" Course of Choice"
                                    />
                                </div>
                                <TextInput
                                    id="Select Course of Choice"
                                    type="text"
                                    placeholder="Select Course of Choice"
                                    required={true}
                                    defaultValue={item.item.title}
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="phonenumber"
                                        value="Phone Number"
                                    />
                                </div>
                                <TextInput
                                    id="phonenumber"
                                    type="tel"
                                    placeholder='Phone Number'
                                    value={phoneNumber}
                                    onChange={(text) => setphoneNumber(text.target.value)}
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="Email"
                                        value="Email"
                                    />
                                </div>
                                <TextInput
                                    id="Email"
                                    type="email"
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(text) => setemail(text.target.value)}
                                    required={true}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="State"
                                            value="State"
                                        />
                                    </div>
                                    <TextInput
                                        id="State"
                                        type="text"
                                        placeholder='Enter State'
                                        value={state}
                                        onChange={(text) => setstate(text.target.value)}
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="Address"
                                            value="Address"
                                        />
                                    </div>
                                    <TextInput
                                        id="Address"
                                        type="text"
                                        placeholder='Enter your address'
                                        value={address}
                                        onChange={(text) => setaddress(text.target.value)}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="large"
                                        value="Additional Message"
                                    />
                                </div>
                                <TextInput
                                    id="large"
                                    type="text"
                                    sizing="lg"
                                    value={message}
                                    onChange={(text) => setmessage(text.target.value)}
                                    placeholder='Enter any other additional mesage you wish to communicate...'
                                />
                            </div>

                            {
                                isloading ? <Spinner
                                    color="warning"
                                    aria-label="Warning spinner example"
                                /> :
                                    <div className="w-fit mt-3">
                                        <CustomButton>Apply Now</CustomButton>
                                    </div>
                            }
                        </form>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </div>
    )
}



export default Exclusive