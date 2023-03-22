import React from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import GetStarted from "./home/GetStarted";
import SchoolDropDown from "./header/SchoolDropDown";
import PlatformDropDown from "./header/PlatformDropDown";
import EnterpriseDropDown from "./header/EnterpriseDropDown";
import MoreDropDown from "./header/MoreDropDown";

function Header() {
  return (
    <div className="sticky top-0 backdrop-grayscale z-40">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="mr-3 ml-6 h-6 sm:h-9"
            alt="pluralcode Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="hidden lg:flex gap-4">
            <button className="bg-white border border-amber-500 text-amber-500 text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-[80%] mx-auto lg:w-fit flex justify-center items-center">
              <a href="https://student.pluralcode.institute/login" className="flex items-center text-amber-500">
                Sign in
              </a>
            </button>
            <GetStarted />
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <Dropdown arrowIcon={true} inline={true} label={"Schools"}>
              <Dropdown.Item>
                <SchoolDropDown />
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown arrowIcon={true} inline={true} label={"Platforms"}>
              <Dropdown.Item>
                <PlatformDropDown />
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown arrowIcon={true} inline={true} label={"Enterprise"}>
              <Dropdown.Item>
                <EnterpriseDropDown />
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown arrowIcon={true} inline={true} label={"More"}>
              <Dropdown.Item>
                <MoreDropDown />
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <div className="block md:hidden">
              <GetStarted />
            </div>
          </Navbar.Link>
          <Navbar.Link>
            <div className="block md:hidden">
              <button className="bg-white border border-amber-500 text-amber-500 text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-[80%] mx-auto lg:w-fit flex justify-center items-center">
                <a href="https://student.pluralcode.institute/login" className="flex items-center text-amber-500">
                  Sign in
                </a>
              </button>
            </div>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
