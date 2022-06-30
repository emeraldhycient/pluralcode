import step from "../../assets/images/step.png";

function Step({ title, count, description }) {
  return (
    <div className="bg-white h-fit rounded-lg w-full p-3 ml-3">
      <img src={step} className="h-12 w-12" alt="" />
      <h3 className="mt-2 font-semibold text-sm">Step {count}</h3>
      <h2 className="text-base font-semibold mt-1">{title}</h2>
      <h4 className="text-sm my-1">{description}</h4>
    </div>
  );
}

export default Step;
