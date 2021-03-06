import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner, Modal, TextInput, Textarea, Label } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import product from "../../assets/images/product.png";
import ment from "../../assets/images/ment.png";

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setloading] = useState(false);

  const [fname, setfname] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [trainingfocus, settrainingfocus] = useState("");
  const [experience, setexperience] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const notifySuccess = () =>
    toast.success(
      "thank you for reaching out , we would get back to you at the earliest!",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    const formdata = new FormData();
    formdata.append("name", `${fname}`);
    formdata.append("linkedin", linkedin);
    formdata.append("email", email);
    formdata.append("phone_number", phone);
    formdata.append("specialization", trainingfocus);
    formdata.append("state", state);
    formdata.append("city", city);
    formdata.append("experience", experience);

    const response = await axios.post(`${API_URL}register_mentor`, formdata);
    console.log(response);
    if (response.status === 200) {
      setloading(false);
      setIsModalOpen(false);
      notifySuccess();
    }
  };

  return (
    <section className="h-fit md:h-[65vh] lg:h-screen w-screen pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className=" h-full flex flex-col md:justify-center items-left text-left w-full align-left">
          <h1 className="text-4xl md:text-5xl font-bold  font-gilroy  lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug	">
            <span className="text-amber-500">Mentor</span> Tech
            <span className="text-amber-500"> Talents</span>For Global Impact
          </h1>
          <p className="font-gilroyregular text-[16px]  lg:text-left  font-extralight text-[#232323] mb-8">
            Become a mentor! Join our team of Tech Experts to mentor our
            students to prepare them for a profitable future.
          </p>
          <React.Fragment>
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
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="bg-amber-500 text-white px-2 py-2 rounded w-[50%] md:w-[40%] "
            >
              <a className="flex justify-center items-center text-center w-full">
                Get Started
              </a>
            </button>
            <Modal
              show={isModalOpen}
              size="lg"
              onClose={() => setIsModalOpen(!isModalOpen)}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Let us know how we can help{" "}
                  </h3>

                  <form onSubmit={handleSubmit}>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="First Name" />
                      </div>
                      <TextInput
                        id="name"
                        placeholder="Enter First Name"
                        value={fname}
                        onChange={(e) => setfname(e.target.value)}
                        required={true}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="Linkedin Url" />
                      </div>
                      <TextInput
                        id="name"
                        placeholder="Enter linkedin url"
                        value={linkedin}
                        onChange={(e) => setlinkedin(e.target.value)}
                        required={true}
                      />
                    </div>
                    <div className="mt-2">
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
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="PhoneNumber" value="Phone Number" />
                      </div>
                      <TextInput
                        id="PhoneNumber"
                        placeholder="Enter Business Phone Number"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        required={true}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-2">
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="state" value="state" />
                        </div>
                        <TextInput
                          id="state"
                          placeholder="state"
                          value={state}
                          onChange={(e) => setstate(e.target.value)}
                          required={true}
                        />
                      </div>

                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="city" value="city" />
                        </div>
                        <TextInput
                          id="city"
                          placeholder="city"
                          value={city}
                          onChange={(e) => setcity(e.target.value)}
                          required={true}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="AreaofSpecialization"
                          value="Area of Specialization"
                        />
                      </div>
                      <select
                        value={trainingfocus}
                        onChange={(e) => settrainingfocus(e.target.value)}
                        className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
                      >
                        <option>Select Area of Specialization</option>
                        <option value="product design">Product Design</option>
                        <option value="product management">
                          Product Development
                        </option>
                        <option value="front development">
                          front Development
                        </option>
                        <option value="backend development">
                          Backend Development
                        </option>
                        <option value="fullstack development">
                          Fullstack Development
                        </option>
                        <option value="data analysis">Data Analysis</option>
                        <option value="Machine Learning">
                          Machine Learning
                        </option>
                      </select>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="PhoneNumber"
                          value="How Many Years of Experience"
                        />
                      </div>
                      <TextInput
                        id="PhoneNumber"
                        placeholder="How Many Years of Experience"
                        value={experience}
                        onChange={(e) => setexperience(e.target.value)}
                        required={true}
                      />
                    </div>

                    <div className="w-full mt-3">
                      <button
                        type="submit"
                        className="bg-amber-500 border-[.001rem] border-amber-500  px-8 py-2 text-[12px] rounded mt-3  w-full md:w-[100%]  lg:w-fit flex justify-center items-center text-white"
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
              </Modal.Body>
            </Modal>
          </React.Fragment>
        </div>
        <div className="col-span- pb-2 mt-8 md:mt-0 flex justify-center items-center pt-6 md:pt-16">
          <center>
            <img
              src={ment}
              alt="corporate training"
              className="w-[95%] md:w-[80%] h-[90%]"
            />
          </center>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
