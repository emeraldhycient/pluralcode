import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner, Modal, TextInput, Label } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import section3 from "../../assets/images/Image.png";

function Section3() {
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
    <div className="h-fit  w-full md:py-20 py-20">
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
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto">
        <div className="flex justify-center items-center flex-col mb-10 md:mb-0">
          <center>
            <img src={section3} alt="" className="w-[80%]" />
          </center>
        </div>
        <div className="flex justify-center  flex-col mx-4">
          <h1 className="text-xl md:text-2xl font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
            Flexible Training Schedule
          </h1>
          <p className="font-gilroyregular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing.
          </p>
          <React.Fragment>
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="bg-amber-500 text-white px-2 py-2 rounded w-44 text-center mt-3"
            >
              <a className="flex text-center justify-center items-center w-full">
                Get Started
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
                    Tell us more about your company
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
    </div>
  );
}

export default Section3;
