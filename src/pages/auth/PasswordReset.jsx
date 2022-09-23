import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Label, TextInput } from "flowbite-react";
import CustomButton from "../../components/CustomButton";
import logo from "../../assets/logo.png";

function PasswordReset() {
  const [steps, setsteps] = useState(1);

  const EmailComp = () => {
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
        <form className="mt-3">
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Enter email"
              required={true}
            />
          </div>

          <div className="w-full mt-7" onClick={() => setsteps(1)}>
            <CustomButton>Get Verification Code</CustomButton>
          </div>
        </form>
      </div>
    );
  };

  const OtpCompp = () => {
    return (
      <div
        className={`bg-[#FFFFFF] h-screen md:h-fit overflow-x-auto w-full md:w-[500px]  p-12  md:p-20 rounded-t-xl `}
      >
        <h1 className="text-[25px] text-[#222057] text-center font-bold">
          Enter Verification Code{" "}
        </h1>
        <p className="text-[14px] text-[#232323] text-center w-[70%] mx-auto">
          Please enter the four digit number that was sent to
          exam******@*****.com
        </p>
        <form className="mt-3">
          <div className="mb-3">
            <TextInput
              id="otp"
              type="number"
              className="text-center items-center"
              placeholder="0 0 0 0"
              required={true}
            />
          </div>

          <div className="w-full mt-7" onClick={() => setsteps(1)}>
            <CustomButton>Continue</CustomButton>
          </div>
        </form>
      </div>
    );
  };

  const ResetForm = () => {
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
        <form className="mt-3">
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="password_new" value="New Password" />
            </div>
            <TextInput
              id="password_new"
              type="password"
              placeholder="Enter new password"
              required={true}
            />
          </div>
          <div className="mb-3">
            <TextInput
              id="password_confirm"
              type="password"
              placeholder="Confirm new password"
              required={true}
            />
          </div>

          <div className="w-full mt-7" onClick={() => setsteps(1)}>
            <CustomButton>Get Verification Code</CustomButton>
          </div>
        </form>
      </div>
    );
  };

  return (
    <Layout>
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
