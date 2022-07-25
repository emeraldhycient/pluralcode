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
            <option value="">{`<20`}</option>
            <option value="product management">Product Development</option>
            <option value="front development">front Development</option>
            <option value="backend development">Backend Development</option>
            <option value="fullstack development">Fullstack Development</option>
            <option value="data analysis">Data Analysis</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>{" "}
        </div>{" "}
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput id="small" type="text" sizing="md" />
        </div>{" "}
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput id="small" type="text" sizing="md" />
        </div>{" "}
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput id="small" type="text" sizing="md" />
        </div>{" "}
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput id="small" type="text" sizing="md" />
        </div>
      </div>
    </div>
  );
}

export default Book;
