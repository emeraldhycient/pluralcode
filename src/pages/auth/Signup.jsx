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



function Signup() {

  const navigate = useNavigate();
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [phonenumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [isLoading, setIsloading] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsloading(true)
    const data = new FormData();
    data.append('name', `${fName} ${lName}`);
    data.append('email', email);
    data.append('phone_number', phonenumber);
    data.append('password', password);
    data.append('password_confirmation', cPassword);



    try {

      const res = await axiosClient.post("/register_student", data)
      console.log(res)
      // setToken(res.data.token)
      // setUser(JSON.stringify(res.data))
      toast.success("registration sucessful, you will be redirected now", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/login")
      }, 1500)
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
    <Layout>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="w-full h-full mr-5 ">
          <img
            src="https://i.im.ge/2022/09/21/1DGBDY.Frame-946.png"
            className="h-screen w-full hidden md:block"
            alt=""
          />
          <img
            src={logo}
            alt=""
            className="w-[80%] block md:hidden mx-auto my-8"
          />
        </div>
        <div
          className={`bg-[#FFFFFF] h-screen overflow-x-auto w-full p-12 rounded-t-xl `}
        >
          <h1 className="text-[25px] text-[#222057] font-bold">
            Create an Account
          </h1>
          <p className="text-[14px] text-[#232323]">
            Setup your account to get started
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
            <div className="mb-3">
              <div className="mb-2 block">
                <Label htmlFor="confirmpassword" value="Confirm Password" />
              </div>
              <TextInput
                id="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                value={cPassword}
                onChange={(text) => setCPassword(text.target.value)}
                required={true}
              />
            </div>
            {isLoading ?
              <div className="w-full mt-7">
                <CustomButton>         <div className="mr-3">
                  <Spinner
                    size="sm"
                    light={true}
                  />
                </div>
                  Loading ...</CustomButton>
              </div> :
              <div className="w-full mt-7">
                <CustomButton>Create an Account</CustomButton>
              </div>
            }

          </form>
          <a href="/login" className="text-[14px] text-[#232323] flex mt-4">
            Already have an account ?
            <span className="text-amber-500 mx-1">Login</span>
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
