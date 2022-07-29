import ScrollIntoView from "react-scroll-into-view";

function GetStarted() {
  return (
    <ScrollIntoView selector="#book">
      <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded w-[100%] mx-auto lg:mx-0 lg:w-fit flex justify-center items-center">
        <a className="flex items-center">Book Appointment</a>
      </button>
    </ScrollIntoView>
  );
}

export default GetStarted;
