import afriglobe from "../../assets/images/afriglobe.png";
import appzone from "../../assets/images/Appzone.png";
import palmpay from "../../assets/images/palmpay.png";
import wetfire from "../../assets/images/wetfire.png";
import vilo from "../../assets/images/vilo.png";
import bankly from "../../assets/images/bankly.png";

function WhereMentorsWork() {
  return (
    <section className="h-fit py-28 w-screen bg-gray-50">
      <center>
        <h1 className="text-xl font-extralight text-[#222057] font-gilroy text-center w-full align-left mb-12 	">
          Where Our Mentors Work
        </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 w-11/12 md:w-8/12  mx-auto h-full w-full">
        <img src={palmpay} alt="palmpay logo" />
        <img src={afriglobe} alt="afriglobe logo" />
        <img src={appzone} alt="appzone logo" />
        <img src={wetfire} alt="wetfire co logo" className="-mt-2" />
        <img src={vilo} alt="vilo finance logo" className="-mt-2" />
        <img src={bankly} alt="bankly logo" className="-mt-2" />
      </div>
    </section>
  );
}

export default WhereMentorsWork;
