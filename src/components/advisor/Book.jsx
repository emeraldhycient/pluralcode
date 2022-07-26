import { useState, useEffect } from "react";
import { Label, TextInput, Spinner } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Book() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [loading, setloading] = useState(false);

  const [courses, setcourses] = useState([]);

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [trainingfocus, settrainingfocus] = useState("");
  const [age, setage] = useState("");
  const [taken_any_course_before, settaken_any_course_before] = useState("");
  const [mode_of_learning, setmode_of_learning] = useState("");
  const [current_job, setcurrent_job] = useState("");
  const [reason_for_learning, setreason_for_learning] = useState("");
  const [schedule, setschedule] = useState("");

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

  const handleBooking = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const formdata = new FormData();
      formdata.append("name", `${fname} ${lname}`);
      formdata.append("email", email);
      formdata.append("phone_number", phone);
      formdata.append("age", age);
      formdata.append("course_interested_in", trainingfocus);
      formdata.append("location", `${state} ${city}`);
      formdata.append("taken_any_course_before", taken_any_course_before);
      formdata.append("mode_of_learning", mode_of_learning);
      formdata.append("current_job", current_job);
      formdata.append("reason_for_learning", reason_for_learning);
      formdata.append("schedule", schedule);

      const response = await axios.post(`${API_URL}schedule_meeting`, formdata);
      if (response.status === 200) {
        notifySuccess();
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
    setloading(false);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}getcourses`)
      .then((res) => {
        // console.log(res);
        setcourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-fit  bg-[#F8F8FA] py-10 md:py-20" id="book">
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
      <div className=" w-11/12 md:w-6/12 mx-auto">
        <form onSubmit={handleBooking}>
          <center>
            <h1 className="text-xl md:text-2xl font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
              Book Appointment
            </h1>
          </center>
          <div className="my-3">
            <div className="mb-2 block">
              <Label htmlFor="FirstName" value="First Name " />
            </div>
            <TextInput
              id="FirstName"
              type="text"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
              sizing="md"
            />
          </div>
          <div className="my-3">
            <div className="mb-2 block">
              <Label htmlFor=" LastName" value=" Last Name " />
            </div>
            <TextInput
              id=" LastName"
              type="text"
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              sizing="md"
            />
          </div>
          <div className="my-3">
            <div className="mb-2 block">
              <Label htmlFor="email" value="email " />
            </div>
            <TextInput
              id="email"
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              sizing="md"
            />
          </div>
          <div className="my-3">
            <div className="mb-2 block">
              <Label
                htmlFor="Phone/WhatsAppNumber"
                value="Phone/WhatsApp Number "
              />
            </div>
            <TextInput
              id="Phone/WhatsAppNumber"
              type="text"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              sizing="md"
            />
          </div>
          <div className="my-3">
            <div className="mb-2 block">
              <Label htmlFor="state" value="state " />
            </div>
            <TextInput
              id="state"
              type="text"
              value={state}
              onChange={(e) => setstate(e.target.value)}
              sizing="md"
            />
          </div>
          <div className="my-3">
            <div className="mb-2 block">
              <Label htmlFor="city" value="city " />
            </div>
            <TextInput
              id="city"
              type="text"
              value={city}
              onChange={(e) => setcity(e.target.value)}
              sizing="md"
            />
          </div>{" "}
          <div className="my-3">
            <div className="mb-2 block">
              <Label htmlFor="age" value="age" />
            </div>
            <select
              id="age"
              value={age}
              onChange={(e) => setage(e.target.value)}
              className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
            >
              <option>Select age range</option>
              <option value="<20">{`<20`}</option>
              <option value="20-30">{`20-30`}</option>
              <option value="30-40">{`30-40`}</option>
              <option value="40+">{`40+`}</option>
            </select>{" "}
          </div>{" "}
          <div className="my-3">
            <div className="mb-2 block">
              <Label htmlFor="Interest" value="Interest" />
            </div>
            <select
              id="Interest"
              value={trainingfocus}
              onChange={(e) => settrainingfocus(e.target.value)}
              className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
            >
              <option>Select Area of Interest</option>
              {courses.map((course) => (
                <option key={course.id} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>{" "}
          </div>{" "}
          <div className="my-5">
            <div className="mb-2 block">
              <Label
                htmlFor="experience"
                value="Have you taken the above course in the past?"
              />
            </div>
            <div className="grid grid-cols-6 gap-4">
              <div className="">
                <input
                  type="radio"
                  value="yes"
                  onChange={(e) => settaken_any_course_before(e.target.value)}
                  name="group1"
                />
                <label htmlFor="val1">Yes</label>
              </div>
              <div className="">
                <input
                  type="radio"
                  value="no"
                  onChange={(e) => settaken_any_course_before(e.target.value)}
                  name="group1"
                />
                <label htmlFor="val1">No</label>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="my-3">
            <div className="mb-2 block">
              <Label htmlFor="class" value="Which class do you prefer" />
            </div>
            <select
              id="class"
              value={mode_of_learning}
              onChange={(e) => setmode_of_learning(e.target.value)}
              className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
            >
              <option>Select preferred class</option>
              <option value="physical classroom">physical classroom</option>
              <option value="virtual classroom">Virtual classroom</option>
              <option value="one-on-one mentoring">one-on-one mentoring</option>
            </select>{" "}
          </div>
          <div className="my-3">
            <div className="mb-2 block">
              <Label htmlFor="occupation" value="current occupation " />
            </div>
            <TextInput
              id="occupation"
              type="text"
              value={current_job}
              onChange={(e) => setcurrent_job(e.target.value)}
              sizing="md"
            />
          </div>{" "}
          <div className="my-3">
            <div className="mb-2 block">
              <Label
                htmlFor="Interest"
                value="Biggest reason for taking the course"
              />
            </div>
            <select
              value={reason_for_learning}
              onChange={(e) => setreason_for_learning(e.target.value)}
              className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
            >
              <option>Biggest reason for taking the course</option>
              <option value="Upskill for Promotion">
                Upskill for Promotion
              </option>
              <option value="Change of Career/Job">Change of Career/Job</option>
              <option value="Opportunities Outside the country">
                Opportunities Outside the country
              </option>
              <option value="Foundations for Higher Education">
                Foundations for Higher Education
              </option>
              <option value="Learning for my Business/Company">
                Learning for my Business/Company
              </option>
            </select>{" "}
          </div>
          <div className="my-3">
            <div className="mb-2 block">
              <Label
                htmlFor="occupation"
                value="Choose preferred Date & Time to meet with Advisor"
              />
            </div>
            <input
              type="datetime-local"
              value={schedule}
              onChange={(e) => setschedule(e.target.value)}
              className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
            />
          </div>
          <div className="my-3">
            <button
              type="submit"
              className="bg-amber-500 rounded-lg w-full h-10 text-white mt-3"
              disabled={loading}
            >
              {loading ? (
                <Spinner color="failure" aria-label="Failure spinner example" />
              ) : (
                "Book Appointment"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Book;
