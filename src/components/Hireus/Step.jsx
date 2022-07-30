import step from "../../assets/images/step.png";

function Step({ title, count, description }) {
  return (
    <div
      className="bg-white h-68 rounded-lg w-full p-3 ml-3"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <img
        src={step}
        className="h-12 w-12"
        alt=""
        data-aos="fade-right"
        data-aos-duration="2000"
      />
      <h3 className="mt-2 font-gilroy font-medium text-[16px]">Step {count}</h3>
      <h2 className="text-base font-semibold mt-1 font-gilroy ">{title}</h2>
      <h4 className="my-1 font-gilroyregular text-[16px] ">{description}</h4>
    </div>
  );
}

export default Step;
