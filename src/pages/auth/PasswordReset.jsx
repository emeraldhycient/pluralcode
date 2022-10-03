import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Label, TextInput, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OtpInput from "react-otp-input";


import axiosClient from "../../services/apiClient"
import CustomButton from "../../components/CustomButton";
import logo from "../../assets/logo.svg";

function PasswordReset() {
  const navigate = useNavigate();

  const [steps, setsteps] = useState(1);
  const [isLoading, setIsloading] = useState(false)
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")


  const EmailComp = () => {

    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsloading(true)
      const data = new FormData();
      data.append('email', email);

      try {

        const res = await axiosClient.post("/confirm_email", data)
        console.log(res)
        // setToken(res.data.token)
        // setUser(JSON.stringify(res.data))
        toast.success(res.data?.message ? res.data.message : "email found ", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          setsteps(2)
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
      <div
        className={`bg-[#FFFFFF] h-screen md:h-fit overflow-x-auto w-full md:w-[500px]  p-12  md:p-20 rounded-t-xl `}
      >
        <h1 className="text-[25px] text-[#222057] text-center font-bold">
          Forgot Password?{" "}
        </h1>
        <p className="text-[14px] text-[#232323] text-center w-[90%] mx-auto">
          Please enter your email to re-set your password
        </p>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              value={email}
              onChange={(text) => {
                setEmail(text.target.value)
              }}
              placeholder="Enter email"
              required={true}
            />
          </div>


          {isLoading ?
            <div className="w-full mt-7">
              <CustomButton>
                <div className="mr-3">
                  <Spinner
                    size="sm"
                    light={true}
                  />
                </div>
                Loading ...</CustomButton>
            </div> :
            <div className="w-full mt-7">
              <CustomButton>Get Verification Code</CustomButton>

            </div>
          }



        </form>
      </div>
    );
  };

  const OtpCompp = () => {



    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsloading(true)
      const data = new FormData();
      data.append('otp', otp);
      data.append('email', email);

      try {

        const res = await axiosClient.post("/confirm_otp", data)
        console.log(res)
        // setToken(res.data.token)
        // setUser(JSON.stringify(res.data))
        toast.success(res.data?.message ? res.data.message : "otp sent successfully", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          setsteps(3)
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
      <div
        className={`bg-[#FFFFFF] h-screen md:h-fit overflow-x-auto w-full md:w-[500px]  p-12  md:p-20 rounded-t-xl `}
      >
        <h1 className="text-[25px] text-[#222057] text-center font-bold">
          Enter Verification Code{" "}
        </h1>
        <p className="text-[14px] text-[#232323] text-center w-[70%] mx-auto">
          Please enter the four digit number that was sent to  {""}
          {email}
        </p>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <TextInput
              id="otp"
              type="number"
              className="text-center items-center"
              placeholder="0 0 0 0"
              value={otp}
              onChange={(text) => setOtp(text.target.value)}
              required={true}
            /> */}
            <OtpInput
              value={otp}
              onChange={(text) => setOtp(text)}
              numInputs={4}
              separator={<span style={{ width: "8px" }}></span>}
              isInputNum={true}
              shouldAutoFocus={true}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 1rem",
                fontSize: "2rem",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.3)"
              }}
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
              <CustomButton>Continue</CustomButton>
            </div>
          }


        </form>
      </div>
    );
  };

  const ResetForm = () => {

    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsloading(true)
      const data = new FormData();
      data.append('password', password);
      data.append('password_confirmation', cPassword);
      data.append('email', email);

      try {

        const res = await axiosClient.post("/confirm_otp", data)
        console.log(res)
        // setToken(res.data.token)
        // setUser(JSON.stringify(res.data))
        toast.success(res.data?.message ? res.data.message : "password change successful", {
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
        console.log(error)

        error.response.data?.error.map((err) => {
          toast.error(`${err}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        })
      }
      setIsloading(false)

    }

    return (
      <div
        className={`bg-[#FFFFFF] h-screen md:h-fit overflow-x-auto w-full md:w-[500px]  p-12  md:p-20 rounded-t-xl `}
      >
        <h1 className="text-[25px] text-[#222057] text-center font-bold">
          Reset Password
        </h1>
        <p className="text-[14px] text-[#232323] text-center  mx-auto">
          Enter your new password
        </p>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="password_new" value="New Password" />
            </div>
            <TextInput
              id="password_new"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(text) => setPassword(text.target.value)}
              required={true}
            />
          </div>
          <div className="mb-3">
            <TextInput
              id="password_confirm"
              type="password"
              placeholder="Confirm new password"
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
              <CustomButton>Change password</CustomButton>
            </div>
          }


        </form>
      </div>
    );
  };

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
      <div className="grid grid-cols-1 gap-6 ">
        <div
          className={` h-screen  overflow-x-auto  rounded-t-xl md:flex justify-center items-center`}
        >
          {steps === 1 ? (
            <EmailComp />
          ) : steps === 2 ? (
            <OtpCompp />
          ) : (
            <ResetForm />
          )}
        </div>
        <div className="w-full h-full mr-5 order-first md:order-last">
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

export default PasswordReset;
