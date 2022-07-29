import React, { useState, useEffect } from "react";
import { Modal, Spinner } from "flowbite-react";
import axios from "axios";

function ApplyNow({ course, reference }) {
  const [isModalOpen, setisModalOpen] = useState(false);

  const [cohorts, setcohorts] = useState([]);
  const [cohort, setcohort] = useState("");
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cohort) {
      window.location.assign(
        `https://pluralcode.academy/payment/index.html?reference=${reference}&id=${cohort}`
      );
    }
  };

  useEffect(() => {
    setloading(true);
    axios
      .post(
        `https://pluralcode.academy/pluralcode_payments/api/get_course_date`,
        {
          course: course,
        }
      )
      .then((res) => {
        console.log(res);
        setcohorts(res?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <button
        onClick={(e) => setisModalOpen(!isModalOpen)}
        className="bg-amber-500 border border-amber-500  text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0 lg:ml-3 w-full md:w-[100%] mx-auto lg:w-fit flex justify-center items-center"
      >
        <a className="flex items-center text-white">Apply Now</a>
      </button>
      <Modal
        show={isModalOpen}
        size="md"
        popup={true}
        onClose={(e) => setisModalOpen(!isModalOpen)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Select your Cohort
            </h3>
            <p className="font-gilroyregular  text-sm">
              Kindly select your course Avilable Cohort to procced.
            </p>
            <form className="my-3" onSubmit={handleSubmit}>
              <select
                id="age"
                value={cohort}
                onChange={(e) => setcohort(e.target.value)}
                className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
              >
                <option>Cohorts</option>
                {cohorts.length > 0 &&
                  cohorts.map((course) => (
                    <option value={course.id}>{course.name}</option>
                  ))}
              </select>
              <div className="my-4">
                <button
                  type="submit"
                  className="bg-amber-500 border border-amber-500  text-white px-8 py-2 text-[12px] rounded mt-3 lg:mt-0  w-full md:w-[100%] mx-auto lg:w-[100%] flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner
                      color="failure"
                      aria-label="Failure spinner example"
                    />
                  ) : (
                    "Book Appointment"
                  )}
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ApplyNow;
