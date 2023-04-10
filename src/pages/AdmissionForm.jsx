import React, { useState, useEffect } from "react";
import { Spinner, Modal, TextInput, Label, FileInput } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


function AdmissionForm() {

    const API_URL = import.meta.env.VITE_API_URL;

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [loading, setloading] = useState(false);
    const [city, setcity] = useState([])
    const [program_type, setprogram_type] = useState("")
    const [course_of_interest, setcourse_of_interest] = useState("")
    const [state, setstate] = useState("")
    const [country, setcountry] = useState("")
    const [phone, setphone] = useState("")
    const [address, setaddress] = useState("")
    const [passport_photograph, setpassport_photograph] = useState("")
    const [personal_id_photograph, setpersonal_id_photograph] = useState("")
    const [reference_name, setreference_name] = useState("")
    const [reference_phone, setreference_phone] = useState("")
    const [reference_email, setreference_email] = useState("")

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };



    const notifySuccess = () =>
        toast.success("registration successful ☺️!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
      

        if (checked) {

            setloading(true);

            const formdata = new FormData();
            formdata.append("name", name);
            formdata.append("email", email);
            formdata.append("course_of_interest", course_of_interest);
            formdata.append("state_of_residence", state);
            formdata.append("country", country);
            formdata.append("city", city);
            formdata.append("address", address);
            formdata.append("phone_number", phone);
            formdata.append("reference_name", reference_name);
            formdata.append("reference_phone", reference_phone);
            formdata.append("reference_email", reference_email);
            formdata.append("program_type", program_type);
            formdata.append("passport_photograph", passport_photograph);
            formdata.append("personal_id_photograph", personal_id_photograph);
            
            try {
                const response = await axios.post(`${API_URL}enroll_student`, formdata);
                if (response.status === 200) {
                    setloading(false);
                    notifySuccess();
                }
            } catch (error) {
                setloading(false);
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } else {
            toast.error("Please read and  accept our terms and conditions to proceed", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    };

    const [courses, setcourses] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${API_URL}bot_course_list`);
            setcourses(response.data);
        };
        fetchData();
    }
        , []);




    return (
        <section id="formsection">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="h-[50vh] bg-[#2220570D] flex justify-center items-center">
                <div className="">
                    <h1
                        className="text-[30px] md:text-[45px] font-bold  font-gilroy text-center  text-[#222057] mb-6 lg:leading-tight	"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        Admission Form
                    </h1>
                    <p className="font-gilroyregular text-[14px] font-extralight mb-16  mx-auto text-center">
                        Kindly fill this out the form below
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 md:w-11/12 h-full w-full mx-auto">
                <div className="flex justify-start items-center flex-col py-4 px-4">
                    <div className="lg:h-[300px] bg-[#FFFFFF] w-full lg:w-8/12 rounded-[24px] p-10 shadow shadow-[0px -8.87px 55px -2.21742px rgba(248, 153, 29, 0.05), 0px 3.54787px 154px -2.6609px rgba(16, 24, 40, 0.03)]">
                        <p className="font-gilroyregular text-[20px] font-medium mb-3  mx-auto text-center  text-[#222057]">
                            Disclaimer
                        </p>
                        <p className="font-gilroyregular text-[14px] font-extralight mb-16  mx-auto">
                            Please ensure that the name provided on the form is what you want on your certificate.                         </p>
                        {/* <p className="font-gilroyregular text-[14px] font-extralight mb-3  mx-auto">
                            1) A Working Laptop
                        </p>
                        <p className="font-gilroyregular text-[14px] font-extralight mb-3  mx-auto">
                            2) Basic Knowledge of Computer Science
                        </p>
                        <p className="font-gilroyregular text-[14px] font-extralight mb-3  mx-auto">
                            3) A Great Story
                        </p> */}
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col w-full order-last md:order-first">

                    <form onSubmit={handleSubmit} className=" rounded-3xl w-full py-12 px-4 md:p-12">
                        <h1
                            className="text-medium md:text-xl font-bold  font-gilroy text-center  text-[#222057] mb-6 lg:leading-tight	"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            Personal information
                        </h1>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Full name" />
                            </div>
                            <TextInput
                                id="name"
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label className="text-gray-100" htmlFor="phone" value="Phone Number" />
                            </div>
                            <TextInput
                                id="phone"
                                placeholder="+2347088639675"
                                value={phone}
                                onChange={(e) => setphone(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label htmlFor="city" value="Course of Interest" />
                            </div>
                            <select
                                id="bjuebsjsn"
                                value={course_of_interest}
                                onChange={(e) => setcourse_of_interest(e.target.value)}
                                className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
                                required
                            >
                                <option>Course of Interest</option>

                                {
                                    courses.map((item) => (
                                        <option value={item.name} key={item.id}>{item.name}</option>
                                    ))
                                }

                            </select>
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label htmlFor="city" value="Program Type" />
                            </div>
                            <select
                                id="2swiwn"
                                value={program_type}
                                onChange={(e) => setprogram_type(e.target.value)}
                                className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
                                required
                            >
                                <option>Program type</option>
                                <option value={"diploma"}>Diploma course</option>
                                <option value={"Certificate"}>Certificate course</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label htmlFor="city" value="passport photograph" />
                            </div>
                            <FileInput
                                id="file"
                                onChange={(event) => {
                                    setpassport_photograph(event.target.files[0])
                                }}
                            />
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label htmlFor="city" value="personal id photograph" />
                            </div>
                            <FileInput
                                id="file"
                                onChange={(event) => {
                                    setpersonal_id_photograph(event.target.files[0])
                                }}
                            />
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label htmlFor="city" value="city" />
                            </div>
                            <TextInput
                                id="city"
                                placeholder="city"
                                value={city}
                                onChange={(e) => setcity(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label htmlFor="state" value="state" />
                            </div>
                            <TextInput
                                id="state"
                                placeholder="states"
                                value={state}
                                onChange={(e) => setstate(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label htmlFor="country" value="country" />
                            </div>
                            <TextInput
                                id="country"
                                placeholder="country"
                                value={country}
                                onChange={(e) => setcountry(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label htmlFor="address" value="address" />
                            </div>
                            <TextInput
                                id="address"
                                placeholder="addresss"
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}
                                required={true}
                            />
                        </div>
                        <h1
                            className="text-medium md:text-xl font-bold  font-gilroy text-left  text-[#222057] my-6 lg:leading-tight	"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            Add Reference
                        </h1>


                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Reference Full name" />
                            </div>
                            <TextInput
                                id="name"
                                placeholder="Full name"
                                value={reference_name}
                                onChange={(e) => setreference_name(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Reference email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={reference_email}
                                onChange={(e) => setreference_email(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 block">
                                <Label className="text-gray-100" htmlFor="phone" value="Reference Phone Number" />
                            </div>
                            <TextInput
                                id="phone"
                                placeholder="+2347088639675"
                                value={reference_phone}
                                onChange={(e) => setreference_phone(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="mt-5 flex items-center">
                            <input type="checkbox" checked={checked}
                                onChange={handleChange} className="mr-2 border-[1px] border-gray-300 rounded-sm" />
                            <p className="text-gray-500">By clicking on Submit, you agree to our <a href="https://pluralcode.academy/payment/terms.html" className="text-amber-500">students policy</a></p>
                        </div>
                        <div className="w-full mt-12">
                            <button
                                type="submit"
                                className="bg-amber-500 border-[.001rem] border-amber-500 mx-auto px-8 py-3 text-[12px] rounded mt-3  w-full md:w-[100%]  lg:w-[60%] flex justify-center items-center text-white"
                                disabled={loading}
                            >
                                <a className="flex items-center text-white">
                                    {loading ? (
                                        <Spinner
                                            color="failure"
                                            aria-label="Failure spinner example"
                                        />
                                    ) : (
                                        "Submit"
                                    )}
                                </a>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AdmissionForm