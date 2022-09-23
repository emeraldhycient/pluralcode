import React from "react";
import Layout from "../../components/layout/Layout";
import { Label, TextInput } from "flowbite-react";
import CustomButton from "../../components/CustomButton";
import logo from "../../assets/logo.png";

function Signup() {
  return (
    <Layout>
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
          <form className="mt-3">
            <div className="mb-3">
              <div className="mb-2 block">
                <Label htmlFor="firstname" value="First Name" />
              </div>
              <TextInput
                id="firstname"
                type="text"
                placeholder="Enter first name"
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
                required={true}
              />
            </div>
            <div className="w-full mt-7">
              <CustomButton>Create an Account</CustomButton>
            </div>
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
