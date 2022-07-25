import { Label, TextInput } from "flowbite-react";
function Book() {
  return (
    <div className="h-fit  bg-[#F8F8FA] py-10 md:py-20" id="book">
      <div className=" w-11/12 md:w-6/12 mx-auto">
        <center>
          <h1 className="text-xl md:text-2xl font-bold  font-gilroy  w-full  text-[#222057] mb-2 md:mb-4 ">
            Book Appointment
          </h1>
        </center>
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="FirstName" value="First Name " />
          </div>
          <TextInput id="FirstName" type="text" sizing="md" />
        </div>
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor=" LastName" value=" Last Name " />
          </div>
          <TextInput id=" LastName" type="text" sizing="md" />
        </div>
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="email" value="email " />
          </div>
          <TextInput id="email" type="text" sizing="md" />
        </div>
        <div className="my-3">
          <div className="mb-2 block">
            <Label
              htmlFor="Phone/WhatsAppNumber"
              value="Phone/WhatsApp Number "
            />
          </div>
          <TextInput id="Phone/WhatsAppNumber" type="text" sizing="md" />
        </div>
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="state" value="state " />
          </div>
          <TextInput id="state" type="text" sizing="md" />
        </div>
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="city" value="city " />
          </div>
          <TextInput id="city" type="text" sizing="md" />
        </div>{" "}
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="age" value="age" />
          </div>
          <select className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400">
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
          <select className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400">
            <option>Select Area of Interest</option>
            <option value="product design">Product Design</option>
            <option value="product management">Product Development</option>
            <option value="front development">front Development</option>
            <option value="backend development">Backend Development</option>
            <option value="fullstack development">Fullstack Development</option>
            <option value="data analysis">Data Analysis</option>
            <option value="Machine Learning">Machine Learning</option>
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
              <input type="radio" value="yes" name="group1" />
              <label htmlFor="val1">Yes</label>
            </div>
            <div className="">
              <input type="radio" value="no" name="group1" />
              <label htmlFor="val1">No</label>
            </div>{" "}
          </div>
        </div>{" "}
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="class" value="Which class do you prefer" />
          </div>
          <select className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400">
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
          <TextInput id="occupation" type="text" sizing="md" />
        </div>{" "}
        <div className="my-3">
          <div className="mb-2 block">
            <Label
              htmlFor="Interest"
              value="Biggest reason for taking the course"
            />
          </div>
          <select className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400">
            <option>Biggest reason for taking the course</option>
            <option value="Upskill for Promotion">Upskill for Promotion</option>
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
            <Label htmlFor="occupation" value="current occupation " />
          </div>
          <input
            type="datetime-local"
            className="form-select block w-full mt-1 rounded-lg border border-gray-300 mb-2 text-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export default Book;
