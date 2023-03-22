import Step from "./Step";

function Section2() {
  return (
    <div className="h-fit lg:h-screen w-full w-screen pt-10 md:pt-0 bg-[#FFFDFA] pb-20 flex flex-col justify-center items-center">
      <h1 className="text-[30px] font-semibold text-center mb-2 md:mb-10 ">
        How it Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-6 w-11/12 md:w-10/12 mx-auto mt-8">
        <Step
          count={1}
          title="Fill The Application "
          description="Kindly fill out the form above to schedule your visit."
        />
        <Step
          count={2}
          title="Get Contacted
          "
          description="One of our student advisors will reach you to confirm your schedule."
        />
        <Step
          count={3}
          title="Get Contacted"
          description="Visit on the scheduled time to get a tour and advisory session."
        />

      </div>
    </div>
  );
}

export default Section2;
