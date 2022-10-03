import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Label, TextInput, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import CustomButton from "../../components/CustomButton";
import logo from "../../assets/logo.svg";
import axiosClient from "../../services/apiClient"
import { setToken } from "../../services/storage/token"
import { setUser } from "../../services/storage/user"
import styles from "./auth.module.css"



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsloading] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsloading(true)
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);

    try {

      const res = await axiosClient.post("/login_student", data)
      console.log(res)
      setToken(res.data.token)
      setUser(JSON.stringify(res.data))
      toast.success(res.data?.message ? res.data.message : "login sucessful, you will be redirected now", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/student/dashboard")
      }, 1500)

    } catch (error) {
      console.log(error)

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
        <div
          className={`bg-[#FFFFFF] h-screen overflow-x-auto w-full px-12 md:px-32 rounded-t-xl flex flex-col justify-center   `}
        >
          <h1 className="text-[25px] text-[#222057] font-bold w-full">
            Welcome Back!
          </h1>
          <p className="text-[14px] text-[#232323]">
            Login to your PluralCode account
          </p>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
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
                <Label htmlFor="Password" value="Password" />
              </div>
              <TextInput
                id="Password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
                required={true}
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <p>Remember Me</p>
              </div>

              <a href="/password/reset" className="text-[14px] text-[#232323] flex mt-4">
                forgot password ?
              </a>
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
                <CustomButton>Login</CustomButton>
              </div>
            }
          </form>
          <a href="/register" className="text-[14px] text-[#232323] flex mt-12 mx-auto">
            Don't have an account ?
            <span className="text-amber-500 mx-1">Create an Account</span>
          </a>
        </div>
        <div className={`w-full h-full mr-5 order-first md:order-last ${styles.login_image}`}>
          {/* <img
            src="https://i.im.ge/2022/09/21/1IjlAf.Frame-946-1.png"
            className="h-screen w-full hidden md:block"
            alt=""
          /> */}
          <img
            src={logo}
            alt=""
            className="w-[80%] block md:hidden mx-auto my-8"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Login;
