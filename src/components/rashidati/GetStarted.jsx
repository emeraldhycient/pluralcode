import React, { useState } from "react";
import {
  Spinner,
  Modal,
  TextInput,
  Textarea,
  Label,
  Button,
} from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GetStarted() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setloading] = useState(false);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [description, setdescription] = useState("");
  const [industry, setindustry] = useState("");
  const [phone, setphone] = useState("");
  const [trainingfocus, settrainingfocus] = useState("");
  const [numberOfTrainees, setnumberOfTrainees] = useState("");

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
    formdata.append("business_name", name);
    formdata.append("email", email);
    formdata.append("training_focus", trainingfocus);
    formdata.append("industry", industry);
    formdata.append("phone", phone);
    formdata.append("number_of_trainees", numberOfTrainees);
    formdata.append("description", description);

    const response = await axios.post(
      `${API_URL}hireourtalent_registeration`,
      formdata
    );
    // console.log(response);
    if (response.status === 200) {
      setloading(false);
      setIsModalOpen(false);
      notifySuccess();
    }
  };

  return (
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
        className="bg-amber-500 text-white px-2 py-2 rounded w-44 text-center mt-3"
      >
        <a href="#formsection" className="flex text-center justify-center items-center w-full">
          Get Started
        </a>
      </button>
     
    </React.Fragment>
  );
}

export default GetStarted;
