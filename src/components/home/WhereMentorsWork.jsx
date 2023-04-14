import mentorswork from "../../assets/images/mentorswork.png";

function WhereMentorsWork() {
  return (
    <section className="h-fit py-12 md:py-28 w-screen bg-gray-50">
      <center>
        <h1
          className="text-xl font-extralight text-[#222057] font-gilroy text-center w-full align-left mb-12"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Where Our Talents Work
        </h1>
      </center>
      <div
        className="w-11/12 md:w-7/12 mx-auto"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <img src={mentorswork} alt="map" className="w-full h-full" />
      </div>
    </section>
  );
}

export default WhereMentorsWork;
