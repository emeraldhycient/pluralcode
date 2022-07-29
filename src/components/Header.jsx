import React from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
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
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src={logo}
            className="mr-3 ml-6 h-6 sm:h-9"
            alt="pluralcode Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <GetStarted />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link>
            <Dropdown arrowIcon={true} inline={true} label={"Schools"}>
              <Dropdown.Item>
                <SchoolDropDown />
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown arrowIcon={true} inline={true} label={"Platform"}>
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
          </Navbar.Link>{" "}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
