import step from "../../assets/images/step.png";

function Step({ title }) {
  return (
    <div className="bg-white h-fit rounded-lg w-full p-3 md:ml-3 flex flex-col justify-center items-center">
      <img src={step} className="h-12 w-12" alt="" />
      <h2 className="text-base font-semibold mt-1 font-gilroy ">{title}</h2>
    </div>
  );
}

export default Step;
