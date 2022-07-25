import ScrollIntoView from "react-scroll-into-view";

function GetStarted() {
  return (
    <ScrollIntoView selector="#book">
      <button className="bg-amber-500 text-white px-2 py-2 rounded">
        <a className="flex items-center">Book Appointment</a>
      </button>
    </ScrollIntoView>
  );
}

export default GetStarted;
