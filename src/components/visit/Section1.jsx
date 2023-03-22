import React, { useState, useEffect } from "react";
import about2 from "../../assets/images/about2.png";
import { Spinner, Modal, TextInput, Label } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import vid from "../../assets/images/visit_vid.svg"


function Section1() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const [cohorts, setcohorts] = useState([])
  const [cohort, setcohort] = useState("")
  const [date, setdate] = useState("")
  const [time, settime] = useState("")
  const [phone, setphone] = useState("")

  const notifySuccess = () =>
    toast.success("visit booked successfully ☺️!", {
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
    formdata.append("course", cohort);
    formdata.append("date", date);
    formdata.append("time", time);
    formdata.append("phone_number", phone);


    const response = await axios.post(`${API_URL}book_a_visit`, formdata);
    // console.log(response);
    if (response.status === 200) {
      setloading(false);
      notifySuccess();
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API_URL}get_cohort_list`)
        console.log(res.data)
        setcohorts(res.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])



  return (
    <section className=" py-10 lg:py-20 w-full bg-white">
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
      <center>
        <h1
          className="text-2xl md:text-3xl font-bold  font-gilroy text-center  text-[#222057] mb-16 mt-10 lg:leading-tight	"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Schedule your visit
        </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 md:w-11/12 h-full w-full mx-auto">
        <div className="flex justify-center items-center flex-col w-full">
          <img src={vid} className="w-[70%] m-auto" alt="" />
        </div>
        <div className="flex justify-center items-center flex-col w-full">

          <form onSubmit={handleSubmit} className="shadow rounded-3xl w-full p-12">
            <h1
              className="text-medium md:text-xl font-bold  font-gilroy text-center  text-[#222057] mb-6 lg:leading-tight	"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Kindly fill out the form below
            </h1>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full name" />
              </div>
              <TextInput
                id="name"
                placeholder="Full name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required={true}
              />
            </div>
            <div className="mt-5">
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
            <div className="mt-5">
              <div className="mb-2 block">
                <Label className="text-gray-100" htmlFor="phone" value="Phone Number" />
              </div>
              <TextInput
                id="phone"
                placeholder="+2347088639675"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                required={true}
              />
            </div>
            <div className="mt-5">
              <div className="mb-2 block">
                <Label htmlFor="cohort" value="Cohorts" />
              </div>
              <select
                id="cohort"
                value={cohort}
                onChange={(e) => setcohort(e.target.value)}
                className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
              >
                <option>Select Cohort</option>
                {
                  cohorts.map((cohort, index) => (
                    <option value={cohort.course_category_name} key={index}>{cohort.course_category_name}</option>
                  ))
                }
              </select>
            </div>
            <div className="flex justify-between w-full">
              <div className="mt-5 w-[47%]">
                <div className="mb-2 block">
                  <Label htmlFor="date" value="Day" />
                </div>
                <select
                  id="date"
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                  className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
                >
                  <option>Select Day of the week</option>
                  <option value={"monday"}>Monday</option>
                  <option value={"Tuesday"}>Tuesday</option>
                  <option value={"Wednesday"}>Wednesday</option>
                  <option value={"Thursday"}>Thursday</option>
                  <option value={"Friday"}>Friday</option>
                  <option value={"Saturday"}>Saturday</option>
                  <option value={"Sunday"}>Sunday</option>
                </select>

              </div>
              <div className="mt-5 w-[47%]">
                <div className="mb-2 block">
                  <Label htmlFor="time" value="time" />
                </div>
                <select
                  id="time"
                  value={time}
                  onChange={(e) => settime(e.target.value)}
                  className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
                >
                  <option>Select time</option>
                  <option value={"9:00am"}> 9:00am</option>
                  <option value={" 10:00am"}> 10:00am</option>
                  <option value={"  11:00am"}>  11:00am</option>
                  <option value={" 12:00pm"}> 12:00pm</option>
                  <option value={"1:00pm"}>1:00pm</option>
                  <option value={"2:00pm"}>  2:00pm</option>
                  <option value={" 3:00pm"}> 3:00pm</option>
                  <option value={"4:00pm"}>4:00pm</option>
                </select>
              </div>
            </div>

            <div className="w-full mt-12">
              <button
                type="submit"
                className="bg-amber-500 border-[.001rem] border-amber-500 mx-auto px-8 py-3 text-[12px] rounded mt-3  w-full md:w-[100%]  lg:w-[60%] flex justify-center items-center text-white"
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
      </div>
    </section>
  );
}

export default Section1;
