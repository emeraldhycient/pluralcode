import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner, Modal, TextInput, Label } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setloading] = useState(false);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const notifySuccess = () =>
    toast.success("bronchure sent successfully, kindly check your email!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("course", "Product Design");

    const response = await axios.post(`${API_URL}download_brochure`, formdata);
    // console.log(response);
    if (response.status === 200) {
      setloading(false);
      setIsModalOpen(false);
      notifySuccess();
    }
  };

  return (
    <section className="h-fit md:h-[60vh] lg:h-[90vh]   bg-[#F8F8FA] py-12">
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
      <div
        className="w-11/12 md:w-6/12 mx-auto h-full flex flex-col justify-center items-center text-center w-full align-left mt-6 md:mt-0"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1 className="text-3xl md:text-4xl md:text-5xl font-bold  font-gilroy text-center   w-full align-left text-[#222057] mb-4 lg:leading-snug	">
          Data Analytics Course
        </h1>
        <p className="font-gilroyregular text-[16px] text-center   font-extralight text-[#232323] mb-4">
          Apply Your new skills to real world projects using the latest industry
          tools and techniques in Data Analytics
        </p>
        <h4 className="mb-4">Duration: 12 Weeks | Beginner Level</h4>
        <div className="lg:flex flex-col md:flex-row justify-between  items-center">
          <button className="bg-amber-500 border border-amber-500  text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-full md:w-[100%] mx-auto lg:w-fit flex justify-center items-center">
            <Link to="/advisor" className="flex items-center text-white">
              Apply Now
            </Link>
          </button>
          <button className="bg-white border-[.001rem] border-slate-500 text-amber-500 text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-full md:w-[100%] mx-auto lg:w-fit flex justify-center items-center">
            <Link to="/advisor" className="flex items-center text-amber-500">
              Talk To Student Advisor
            </Link>
          </button>
          <React.Fragment>
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="bg-white border-[.001rem] border-slate-500 text-amber-500 text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-full md:w-[100%] mx-auto lg:w-fit flex justify-center items-center"
            >
              <a className="flex items-center text-amber-500">
                Download Brochure
              </a>
            </button>
            <Modal
              show={isModalOpen}
              size="md"
              popup={true}
              onClose={() => setIsModalOpen(!isModalOpen)}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Download Course Brochure{" "}
                  </h3>
                  <p className="font-gilroyregular  text-sm">
                    Kindly fill the form below with your appropriate details so
                    we forward the brochure to you.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="Your name" />
                      </div>
                      <TextInput
                        id="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
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

                    <div className="w-full mt-3">
                      <button
                        type="submit"
                        className="bg-amber-500 border-[.001rem] border-amber-500  px-8 py-3 text-[12px] rounded mt-3  w-full md:w-[100%]  lg:w-fit flex justify-center items-center text-white"
                        disabled={loading}
                      >
                        <a className="flex items-center text-white">
                          {loading ? (
                            <Spinner
                              color="failure"
                              aria-label="Failure spinner example"
                            />
                          ) : (
                            "Download Brochure"
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
      </div>
    </section>
  );
}

export default Hero;
