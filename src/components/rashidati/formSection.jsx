import React, { useState, useEffect } from "react";
import about2 from "../../assets/images/about2.png";
import { Spinner, Modal, TextInput, Label } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import vid from "../../assets/images/visit_vid.svg"


function FormSection() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const [city, setcity] = useState([])
  const [gender, setgender] = useState("")
  const [state, setstate] = useState("")
  const [country, setcountry] = useState("")
  const [phone, setphone] = useState("")
  const [address, setaddress] = useState("")
  const [video_url, setvideo_url] = useState("")

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
    setloading(true);

    const formdata = new FormData();
    formdata.append("full_name", name);
    formdata.append("email", email);
    formdata.append("gender", gender);
    formdata.append("state", state);
    formdata.append("country", country);
    formdata.append("city", city);
    formdata.append("address", address);
    formdata.append("phone_number", phone);
    formdata.append("video_url", video_url);

    const response = await axios.post(`${API_URL}scholarship_registeration`, formdata);
    // console.log(response);
    if (response.status === 200) {
      setloading(false);
      notifySuccess();
    }
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await axios.get(`${API_URL}get_cohort_list`)
  //       console.log(res.data)
  //       setcohorts(res.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })()
  // }, [])



  return (
    <section id="formsection" className=" py-10 lg:py-20 w-full bg-[#FFFDFA]">
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
      {/* <center>
        <h1
          className="text-2xl md:text-3xl font-bold  font-gilroy text-center  text-[#222057] mb-16 mt-10 lg:leading-tight	"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Schedule your visit
        </h1>
      </center> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 md:w-11/12 h-full w-full mx-auto">
        <div className="flex justify-start items-center flex-col py-4 px-4">
          <div className="lg:h-[300px] bg-[#FFFFFF] w-full lg:w-8/12 rounded-[24px] p-10 shadow shadow-[0px -8.87px 55px -2.21742px rgba(248, 153, 29, 0.05), 0px 3.54787px 154px -2.6609px rgba(16, 24, 40, 0.03)]">
            <p className="font-gilroyregular text-[20px] font-medium mb-3  mx-auto text-center  text-[#222057]">
              Requirements
            </p>
            <p className="font-gilroyregular text-[14px] font-extralight mb-16  mx-auto">
              These are the things required of you before filling this form
            </p>
            <p className="font-gilroyregular text-[14px] font-extralight mb-3  mx-auto">
              1) A Working Laptop
            </p>
            <p className="font-gilroyregular text-[14px] font-extralight mb-3  mx-auto">
              2) Basic Knowledge of Computer Science
            </p>
            <p className="font-gilroyregular text-[14px] font-extralight mb-3  mx-auto">
              3) A Great Story
            </p>
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
                <Label className="text-gray-100" htmlFor="gender" value="gender" />
              </div>
              <TextInput
                id="phone"
                placeholder="+2347088639675"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                required={true}
              />
            </div>
            <div className="mt-5">
              <div className="mb-2 block">
                <Label htmlFor="city" value="city" />
              </div>
              <TextInput
                id="city"
                placeholder="citys"
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
                placeholder="countrys"
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
            <div className="mt-5">
              <div className="mb-2 block">
                <Label htmlFor="video_url" value="video_url" />
              </div>
              <TextInput
                id="video_url"
                placeholder="video_urls"
                value={video_url}
                onChange={(e) => setvideo_url(e.target.value)}
                required={true}
              />
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
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
