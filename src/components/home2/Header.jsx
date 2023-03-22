import React from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import GetStarted from "./GetStarted";
import ScrollIntoView from 'react-scroll-into-view'

import useAnalyticsEventTracker from "../../services/analytics/useAnalyticsEventTracker";



function Header() {

  const gaEventTracker = useAnalyticsEventTracker('ads landing page');


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
              <a href="https://wa.me/2347083153185?text=I'm%20interested%20in%20your%20courses" onClick={() => gaEventTracker('click', "clicked on speak with advisor")} className="flex items-center text-amber-500">
                Speak to Advisor
              </a>
            </button>
            <button onClick={() => gaEventTracker('click', "clicked on Enroll now")} className="bg-amber-500 border border-amber-500 text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-[80%] mx-auto lg:w-fit flex justify-center items-center">
              <ScrollIntoView selector="#schools"> <a className="flex items-center ">
                Enroll Now
              </a></ScrollIntoView>
            </button>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <ScrollIntoView selector="#schools">
              <button className="mdl-button mdl-js-button mdl-button--raised">
                Certificate Courses
              </button>
            </ScrollIntoView>
          </Navbar.Link>

          <Navbar.Link>
            <ScrollIntoView selector="#testimonies">
              <button className="mdl-button mdl-js-button mdl-button--raised">
                Testimonies
              </button>
            </ScrollIntoView>
          </Navbar.Link>
          <Navbar.Link>
            <ScrollIntoView selector="#accredition">
              <button className="mdl-button mdl-js-button mdl-button--raised">
                Accreditation
              </button>
            </ScrollIntoView>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown arrowIcon={true} inline={true} label={"More"}>
              <Dropdown.Item>
                <ScrollIntoView selector="#why">
                  <button className="mdl-button mdl-js-button mdl-button--raised">
                    Why Pluralcode?
                  </button>
                </ScrollIntoView>
              </Dropdown.Item>
              <Dropdown.Item>
                <ScrollIntoView selector="#faq">
                  <button className="mdl-button mdl-js-button mdl-button--raised">
                    FAQ
                  </button>
                </ScrollIntoView>
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <div className="block md:hidden" onClick={() => gaEventTracker('click', "clicked on speak with advisor")}>
              <GetStarted url="https://wa.me/2347083153185?text=I'm%20interested%20in%20your%20courses" title="Speak to Advisor" />
            </div>
          </Navbar.Link>
          <Navbar.Link>
            <div className="block md:hidden" onClick={() => gaEventTracker('click', "clicked on enrol now")} >
              <button className="bg-white border border-amber-500 text-amber-500 text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-[80%] mx-auto lg:w-fit flex justify-center items-center">
                <ScrollIntoView selector="#schools"> <a className="flex items-center text-amber-500">
                  Enroll Now
                </a></ScrollIntoView>
              </button>
            </div>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
