import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Label, TextInput, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CustomButton from "../../components/CustomButton";
import logo from "../../assets/logo.svg";
import axiosClient from "../../services/apiClient"
// import { setToken } from "../../services/storage/token"
// import { setUser } from "../../services/storage/user"
import DashboardLayout from '../../components/layout/DashboardLayout'

function Profile() {

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emergency_phone_number, setemergency_phone_number] = useState("")
    const [emergency_name, setemergency_name] = useState("")
    const [isLoading, setIsloading] = useState(false)


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsloading(true)
        const data = new FormData();
        data.append('name', `${fName} ${lName}`);
        data.append('email', email);
        data.append('phone_number', phonenumber);
        data.append('emergency_name', emergency_name);
        data.append('emergency_phone_number', emergency_phone_number);



        try {

            const res = await axiosClient.post("/student/update_student_details", data)
            console.log(res)
            // setToken(res.data.token)
            // setUser(JSON.stringify(res.data))
            toast.success("Details update successful", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } catch (error) {
            console.log(error.response.data)
            if (error.response?.data?.password) {
                toast.warn(`${error.response.data?.password[0]}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            toast.error(`${error.response.statusText}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setIsloading(false)

    }




    return (
        <DashboardLayout>
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
            <div
                className="bg-[#fff] h-fit w-full  my-4 rounded-3xl py-6 md:py-12 px-6 md:px-12 mb-4"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                <h1
                    className="text-[25px] text-[#222057] font-medium mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    My Profile
                </h1>
                <p
                    className="font-gilroyregular text-sm  lg:text-left  font-extralight text-[#323232] mb-2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    Kindly click on any of the fields to edit
                </p>
                <form className="mt-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="mb-2 block">
                            <Label htmlFor="firstname" value="First Name" />
                        </div>
                        <TextInput
                            id="firstname"
                            type="text"
                            placeholder="Enter first name"
                            value={fName}
                            onChange={(text) => setFName(text.target.value)}
                            required={true}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="mb-2 block">
                            <Label htmlFor="lastname" value="Last Name" />
                        </div>
                        <TextInput
                            id="lastname"
                            type="text"
                            placeholder="Enter last name"
                            value={lName}
                            onChange={(text) => setLName(text.target.value)}
                            required={true}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email *" />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(text) => setEmail(text.target.value)}
                            required={true}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="mb-2 block">
                            <Label htmlFor="phonenumber" value="Phone Number" />
                        </div>
                        <TextInput
                            id="phonenumber"
                            type="tel"
                            placeholder="Enter phone number"
                            value={phonenumber}
                            onChange={(text) => setPhoneNumber(text.target.value)}
                            required={true}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-3">
                            <div className="mb-2 block">
                                <Label htmlFor="sc" value="Emergency Contact" />
                            </div>
                            <TextInput
                                id="sc"
                                type="text"
                                placeholder="Enter emergency contact"
                                value={emergency_phone_number}
                                onChange={(text) => setemergency_phone_number(text.target.value)}
                            // required={true}
                            />
                        </div> <div className="mb-3">
                            <div className="mb-2 block">
                                <Label htmlFor="m" value="Emergency Contact Name" />
                            </div>
                            <TextInput
                                id="m"
                                type="text"
                                placeholder="Enter emergency Name"
                                value={emergency_name}
                                onChange={(text) => setemergency_name(text.target.value)}
                            // required={true}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="mb-2 block">
                            <Label htmlFor="Password" value="Password" />
                        </div>
                        <TextInput
                            id="Password"
                            type="password"
                            placeholder="Create password"
                            value={password}
                            onChange={(text) => setPassword(text.target.value)}
                            required={true}
                        />
                    </div>

                    {isLoading ?
                        <div className="w-[50%] md:w-[30%] mt-7">
                            <CustomButton>         <div className="mr-3">
                                <Spinner
                                    size="sm"
                                    light={true}
                                />
                            </div>
                                Loading ...</CustomButton>
                        </div> :
                        <div className="w-[50%] md:w-[30%] mt-7">
                            <CustomButton>Save</CustomButton>
                        </div>
                    }

                </form>
            </div>
        </DashboardLayout>
    )
}

export default Profile