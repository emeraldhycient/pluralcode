import React from "react";
import Layout from "../../components/layout/Layout";
import { Label, TextInput } from "flowbite-react";
import CustomButton from "../../components/CustomButton";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div
          className={`bg-[#FFFFFF] h-screen overflow-x-auto w-full p-12 rounded-t-xl `}
        >
          <h1 className="text-[25px] text-[#222057] font-bold">
            Welcome Back!
          </h1>
          <p className="text-[14px] text-[#232323]">
            Login to your PluralCode account
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

            <div className="w-full mt-7">
              <CustomButton>Login</CustomButton>
            </div>
          </form>
          <a href="/register" className="text-[14px] text-[#232323] flex mt-4">
            Don't have an account ?
            <span className="text-amber-500 mx-1">Create an Account</span>
          </a>
        </div>
        <div className="w-full h-full mr-5 order-first md:order-last">
          <img
            src="https://i.im.ge/2022/09/21/1IjlAf.Frame-946-1.png"
            className="h-screen w-full hidden md:block"
            alt=""
          />
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
