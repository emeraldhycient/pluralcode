import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner, Modal, TextInput, Textarea, Label } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import product from "../../assets/images/product.png";
import cop from "../../assets/images/cop.png";

function HeroSection() {
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
    <section className="h-fit md:h-[65vh] lg:h-screen w-screen pt-12">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-10/12 mx-auto h-full w-full">
        <div className=" h-full flex flex-col md:justify-center items-left text-left w-full align-left">
          <h6 className="text-amber-500">Get Your Staff SkilledUp With</h6>
          <h1 className="text-4xl md:text-5xl font-bold  font-gilroy  lg:text-left  w-full align-left text-[#222057] mb-4 lg:leading-snug	">
            Our Corporate Training{" "}
          </h1>
          <p className="font-gilroyregular text-[16px]  lg:text-left  font-extralight text-[#232323] mb-8">
            Your employees deserve the best training programs out there. Our
            corporate training program is designed to educate employees. While
            it helps employers, it is also beneficial for employees as it helps
            them obtain and hone knowledge and skills to progress professionally
            and personally.
          </p>
          <React.Fragment>
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="bg-amber-500 text-white px-2 py-2 rounded w-44 text-center"
            >
              <a className="flex text-center justify-center items-center w-full">
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
                    Tell us more about your company
                  </h3>
                  <p className="font-gilroyregular  text-sm">
                    Kindly fill the form below with your appropriate details so
                    we forward the brochure to you.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="Business Name" />
                      </div>
                      <TextInput
                        id="name"
                        placeholder="Enter Business Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required={true}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="Industry" value="Industry" />
                      </div>
                      <TextInput
                        id="Industry"
                        placeholder="What industry does your business belong?"
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
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="PhoneNumber" value="Phone Number" />
                      </div>
                      <TextInput
                        id="PhoneNumber"
                        placeholder="Enter Business Phone Number"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required={true}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="Business Name" />
                      </div>
                      <TextInput
                        id="name"
                        placeholder="Enter Business Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required={true}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="TrainingFocus" value="Training Focus" />
                      </div>
                      <select className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400">
                        <option>Select Training Focus</option>
                        <option>Product Design</option>
                        <option>Product Development</option>
                        <option>front Development</option>
                        <option>Back Development</option>
                        <option>Fullstack Development</option>
                        <option>Data Analysis</option>
                        <option>Machine Learning</option>
                      </select>
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="trainee" value="Number of Trainees" />
                      </div>
                      <TextInput
                        id="trainee"
                        placeholder="Number of Trainees"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required={true}
                      />
                    </div>
                    <div id="textarea">
                      <div className="mb-2 block">
                        <Label htmlFor="Description" value="Description" />
                      </div>
                      <Textarea
                        id="Description"
                        placeholder="Leave additional message..."
                        required={true}
                        rows={4}
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
              src={cop}
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
